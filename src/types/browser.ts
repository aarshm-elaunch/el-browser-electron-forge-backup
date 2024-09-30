import { NEWTAB_ICON_STRING } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

export interface TabContent {
  titleString: string;
  favIconURL: string;
}
export interface Tab {
  tabId: string;
  isActive: boolean;
  tabURL: string;
  tabContent: TabContent;
}
export type BrowserState = {
  isAuthenticated: boolean
  activeTab: Tab | null;
  tabsList: Tab[];
};

export function addNewTab(): Tab {
  return {
    tabId: uuidv4(),
    tabURL: "about:blank",
    isActive: true,
    tabContent: {
      favIconURL: NEWTAB_ICON_STRING,
      titleString: "start page",
    },
  };
}

export const browserInitialState: BrowserState = {
  isAuthenticated: false,
  activeTab: null,
  tabsList: [addNewTab()],
};

export type BrowserContextType = {
  state: BrowserState;
  handleAuthentication: (userName:string, password:string) => void
  handleAddTab: VoidFunction;
  handleCloseTab: (tabId: string) => void;
  handleSetActiveTab: (tabId: string) => void;
  handleLoadUrl: (tabId: string, url: string) => void;
  handleGoBack: (tabId: string) => void;
  handleGoForward: (tabId: string) => void;
  handleReload: (tabId: string) => void;
  webviewRef: React.RefObject<HTMLWebViewElement>;
  handleUpdateTabMetadata: (tabId: string, title: string, favicon: string | null) => void;
};
