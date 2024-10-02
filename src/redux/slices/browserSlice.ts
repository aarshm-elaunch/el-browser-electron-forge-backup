// redux/slices/browserSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrowserState, Tab } from "../../types/browser";
import { v4 as uuidv4 } from "uuid";
import { NEWTAB_ICON_STRING } from "../../utils/constants";

const newTab: Tab = {
  tabId: uuidv4(),
  tabURL: "about:blank",
  tabTitleContent: {
    favIconURL: NEWTAB_ICON_STRING,
    titleString: "start page",
  },
  canGoBack: false,
  canGoForward: false,
  scrollPosition: 0,
};

const initialState: BrowserState = {
  tabsList: [newTab], // initially no tabs
  activeTabId: newTab.tabId, // no active tab initially
};

const browserSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    addTab: (state) => {
      const newTab: Tab = {
        tabId: uuidv4(),
        tabURL: "about:blank",
        tabTitleContent: {
          favIconURL: NEWTAB_ICON_STRING,
          titleString: "start page",
        },
        canGoBack: false,
        canGoForward: false,
        scrollPosition: 0,
      };
      state.tabsList.push(newTab);
      state.activeTabId = newTab.tabId; // Make new tab active
    },
    closeTab: (state, action: PayloadAction<string>) => {
      const updatedTabsList = state.tabsList.filter((tab) => tab.tabId !== action.payload);
      // Check if there are still tabs left
      let newActiveTabId = state.activeTabId;
      if (updatedTabsList.length > 0) {
        // If the closed tab was the active one, assign the last tab as active
        if (state.activeTabId === action.payload) {
          newActiveTabId = updatedTabsList[updatedTabsList.length - 1].tabId;
        }
      } else {
        // No tabs left
        newActiveTabId = null;
      }
      return {
        ...state,
        tabsList: updatedTabsList,
        activeTabId: newActiveTabId, // Ensure activeTabId is updated
      };
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload;
    },
    loadUrl: (state, action: PayloadAction<{ tabId: string; url: string }>) => {
      const tab = state.tabsList.find((tab) => tab.tabId === action.payload.tabId);
      if (tab) tab.tabURL = action.payload.url;
    },
    updateTabState: (
      state,
      action: PayloadAction<{ tabId: string; tabURL: string; canGoBack: boolean; canGoForward: boolean; scrollPos: number }>
    ) => {
      const tab = state.tabsList.find((tab) => tab.tabId === action.payload.tabId);
      if (tab) {
        tab.canGoBack = action.payload.canGoBack;
        tab.canGoForward = action.payload.canGoForward;
        tab.scrollPosition = action.payload.scrollPos;
        tab.tabURL = action.payload.tabURL;
      }
    },
  },
});

// Export actions
export const { addTab, closeTab, setActiveTab, loadUrl, updateTabState } = browserSlice.actions;

// Export reducer
export default browserSlice.reducer;
