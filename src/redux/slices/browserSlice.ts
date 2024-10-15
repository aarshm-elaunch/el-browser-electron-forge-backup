// redux/slices/browserSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrowserState, Tab, TabTitleContent } from "../../types/browser";
import { v4 as uuidv4 } from "uuid";
import { DOWNLOAD_HISTORY_TAB_ICON, HISTORY_TAB_ICON, NEWTAB_ICON_STRING, SETTING_TAB_ICON } from "../../utils/constants";

const newTab: Tab = {
  tabId: uuidv4(),
  tabURL: "",
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
  newTabAdded: false,
};

const browserSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    addTab: (state) => {
      const newTab: Tab = {
        tabId: uuidv4(),
        tabURL: "",
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
      state.newTabAdded = true;
    },
    closeTab: (state, action: PayloadAction<string>) => {
      const updatedTabsList = state.tabsList.filter((tab) => tab.tabId !== action.payload);
      return {
        ...state,
        tabsList: updatedTabsList,
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
      action: PayloadAction<{
        tabId: string;
        tabURL: string;
        canGoBack: boolean;
        canGoForward: boolean;
        scrollPos: number;
        tabTitleContent: TabTitleContent;
      }>
    ) => {
      console.log("update happening")
      const tab = state.tabsList.find((tab) => tab.tabId === action.payload.tabId);
      if (tab) {
        tab.canGoBack = action.payload.canGoBack;
        tab.canGoForward = action.payload.canGoForward;
        tab.scrollPosition = action.payload.scrollPos;
        tab.tabURL = action.payload.tabURL;
        tab.tabTitleContent = action.payload.tabTitleContent;
      }
    },
    openHistoryTab: (state) => {
      const existingHistoryTab = state.tabsList.find((tab) => tab.tabURL === "history");

      if (existingHistoryTab) {
        // If history tab is already open, just make it the active tab
        state.activeTabId = existingHistoryTab.tabId;
      } else {
        // If history tab is not open, create a new tab and make it active
        const newTab: Tab = {
          tabId: uuidv4(),
          tabURL: "history",
          tabTitleContent: {
            favIconURL: HISTORY_TAB_ICON,
            titleString: "History",
          },
          canGoBack: false,
          canGoForward: false,
          scrollPosition: 0,
        };

        state.tabsList.push(newTab);
        state.activeTabId = newTab.tabId; // Make the new history tab active
      }
    },
    openDownloadTab: (state) => {
      const existingDownloadsTab = state.tabsList.find((tab) => tab.tabURL === "downloads");

      if (existingDownloadsTab) {
        // If history tab is already open, just make it the active tab
        state.activeTabId = existingDownloadsTab.tabId;
      } else {
        // If history tab is not open, create a new tab and make it active
        const newTab: Tab = {
          tabId: uuidv4(),
          tabURL: "downloads",
          tabTitleContent: {
            favIconURL: DOWNLOAD_HISTORY_TAB_ICON,
            titleString: "Download history",
          },
          canGoBack: false,
          canGoForward: false,
          scrollPosition: 0,
        };

        state.tabsList.push(newTab);
        state.activeTabId = newTab.tabId;
      }
    },
    openSettingTab: (state) => {
      const existingSettingTab = state.tabsList.find((tab) => tab.tabURL === "setting");

      if (existingSettingTab) {
        state.activeTabId = existingSettingTab.tabId;
      } else {
        const newTab: Tab = {
          tabId: uuidv4(),
          tabURL: "setting",
          tabTitleContent: {
            favIconURL: SETTING_TAB_ICON,
            titleString: "Setting",
          },
          canGoBack: false,
          canGoForward: false,
          scrollPosition: 0,
        };
        state.tabsList.push(newTab);
        state.activeTabId = newTab.tabId;
      }
    },
    resetNewTabAdded(state) {
      state.newTabAdded = false;
    },
    resetTabsState(state) {
      state.tabsList = [newTab];
    },
  },
});

// Export actions
export const { addTab, closeTab, setActiveTab, loadUrl, updateTabState, openHistoryTab, openDownloadTab, openSettingTab, resetNewTabAdded, resetTabsState } = browserSlice.actions;

// Export reducer
export default browserSlice.reducer;
