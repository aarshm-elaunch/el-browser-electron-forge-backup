import { createContext, ReactNode, useEffect, useReducer, useRef } from "react";

// @types
import { ActionMap } from "../types/general";
import { addNewTab, BrowserContextType, browserInitialState, BrowserState, Tab } from "../types/browser";
import { createStandardURL } from "../utils";

type BrowserProviderProps = {
  children: ReactNode;
};

enum Types {
  GetAuthenticated = "GET_AUTH",
  AddTab = "ADD_TAB",
  CloseTab = "CLOSE_TAB",
  UpdateTabs = "UPDATE_TABS",
  SetActiveTab = "SET_ACTIVE_TAB",
  GetActiveTab = "GET_ACTIVE_TAB",
  LoadUrl = "LOAD_URL",
  GoBack = "GO_BACK",
  GoForward = "GO_FORWARD",
  Reload = "RELOAD",
}

type BrowserPayload = {
  [Types.GetAuthenticated]: { flag: boolean };
  [Types.AddTab]: { updatedTabsList: Tab[] };
  [Types.CloseTab]: { tabId: string };
  [Types.SetActiveTab]: { updatedTabsList: Tab[] };
  [Types.GetActiveTab]: { tab: Tab | null };
  [Types.UpdateTabs]: { updatedTabs: Tab[] };
  [Types.LoadUrl]: { updatedTabsList: Tab[] };
  [Types.GoBack]: { tabId: string };
  [Types.GoForward]: { tabId: string };
  [Types.Reload]: { tabId: string };
};

export type BrowserActions = ActionMap<BrowserPayload>[keyof ActionMap<BrowserPayload>];

const initialState: BrowserState = {
  ...browserInitialState,
};

const BrowserReducer = (state: BrowserState, action: BrowserActions): BrowserState => {
  switch (action.type) {
    case Types.GetAuthenticated: {
      return { ...state, isAuthenticated: action.payload.flag };
    }
    case Types.AddTab: {
      return { ...state, tabsList: action.payload.updatedTabsList };
    }
    case Types.CloseTab: {
      // const filterTabs = state.tabsList.filter((tab) => tab.tabId !== action.payload.tabId);
      return { ...state, tabsList: state.tabsList.filter((tab) => tab.tabId !== action.payload.tabId) };
    }
    case Types.SetActiveTab: {
      return {
        ...state,
        tabsList: action.payload.updatedTabsList,
      };
    }
    case Types.GetActiveTab: {
      return {
        ...state,
        activeTab: action.payload.tab,
      };
    }
    case Types.UpdateTabs: {
      return {
        ...state,
        tabsList: action.payload.updatedTabs,
      };
    }
    case Types.LoadUrl: {
      return { ...state, tabsList: action.payload.updatedTabsList };
    }
    case Types.GoBack: {
      // Logic to trigger go back for the active tab
      return state;
    }
    case Types.GoForward: {
      // Logic to trigger go forward for the active tab
      return state;
    }
    case Types.Reload: {
      // Logic to reload the current tab
      return state;
    }
    default:
      return state;
  }
};

const BrowserContext = createContext<BrowserContextType | null>(null);

function BrowserProvider({ children }: BrowserProviderProps) {
  const [state, dispatch] = useReducer(BrowserReducer, initialState);
  const webviewRef = useRef<HTMLWebViewElement | null>(null);

  const handleAuthentication = (uName: string, password: string) => {
    if (uName === "test-dev" && password === "1234") {
      dispatch({ type: Types.GetAuthenticated, payload: { flag: true } });
    } else {
      dispatch({ type: Types.GetAuthenticated, payload: { flag: false } });
    }
  };

  // TAB ACTIONS
  const handleAddTab = () => {
    //first make all tab inactive then addNewTab
    const updatedTabs = state.tabsList.map((tab) => {
      tab.isActive === false;
      return tab;
    });
    dispatch({ type: Types.AddTab, payload: { updatedTabsList: [...updatedTabs, addNewTab()] } });
  };
  const handleCloseTab = (tabId: string) => {
    // remove tab from list and assign last index as active tab
    // const filterTabs = state.tabsList.filter((tab) => tab.tabId !== tabId);
    // const updatedTabs = filterTabs.map((tab, index) => {
    //   if (index === filterTabs.length - 1) {
    //     tab.isActive = true;
    //   } else {
    //     tab.isActive = false;
    //   }
    //   return tab;
    // });
    dispatch({ type: Types.CloseTab, payload: { tabId: tabId } });
  };
  const handleSetActiveTab = (tabId: string) => {
    const updatedTabs = state.tabsList.map((tab) => {
      if (tab.tabId === tabId) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
      return tab;
    });
    dispatch({ type: Types.SetActiveTab, payload: { updatedTabsList: updatedTabs } });
  };

  const handleGetActiveTab = (tab: Tab | null) => {
    dispatch({ type: Types.GetActiveTab, payload: { tab: tab } });
  };

  // NAVIGATION ACTIONS
  const handleLoadUrl = (tabId: string, url: string) => {
    const parseURL = createStandardURL(url);
    // Logic to set the current URL for the active tab (or specific tab)
    const updatedTabs = state.tabsList.map((tab) => {
      if (tab.tabId === tabId) {
        tab.tabURL = parseURL;
      }
      return tab;
    });
    dispatch({ type: Types.LoadUrl, payload: { updatedTabsList: updatedTabs } });
  };

  const handleGoBack = (tabId: string) => {
    dispatch({ type: Types.GoBack, payload: { tabId } });
    if (webviewRef.current?.canGoBack()) {
      webviewRef.current.goBack();
    }
  };

  const handleGoForward = (tabId: string) => {
    dispatch({ type: Types.GoForward, payload: { tabId } });
    if (webviewRef.current?.canGoForward()) {
      webviewRef.current.goForward();
    }
  };

  const handleReload = (tabId: string) => {
    dispatch({ type: Types.Reload, payload: { tabId } });
    webviewRef.current?.reload();
  };

  // Tab Metadata
  const handleUpdateTabMetadata = (tabId: string, title: string, favicon: string | null) => {
    const updatedTabs = state.tabsList.map((tab) => {
      if (tab.tabId === tabId) {
        return { ...tab, title, favicon };
      }
      return tab;
    });
    dispatch({ type: Types.UpdateTabs, payload: { updatedTabs: updatedTabs } });
  };

  // Load the URL into the webview when it changes
  useEffect(() => {
    const handleKeyPress = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        setTimeout(() => {
          if (webviewRef.current !== null && state.activeTab.tabURL !== "about:blank" && state.activeTab.tabURL !== "") {
            webviewRef.current.src = state.activeTab.tabURL;
          }
        }, 50);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [state.activeTab, webviewRef]);

  // find active tab
  useEffect(() => {
    if (state.tabsList.length > 1) {
      const getActive = state.tabsList.filter((tab) => tab.isActive)[0];
      handleGetActiveTab(getActive);
    } else if (state.tabsList.length === 1) {
      handleGetActiveTab(state.tabsList[0]);
    } else {
      handleGetActiveTab(null);
    }
  }, [state.tabsList]);

  return (
    <BrowserContext.Provider
      value={{
        state,
        handleAuthentication,
        handleAddTab,
        handleUpdateTabMetadata,
        handleCloseTab,
        handleSetActiveTab,
        handleGoBack,
        handleGoForward,
        handleLoadUrl,
        handleReload,
        webviewRef,
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
}

export { BrowserContext, BrowserProvider };
