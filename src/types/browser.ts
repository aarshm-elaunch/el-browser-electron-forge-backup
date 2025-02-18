import { WebviewTag } from "electron";
import { NEWTAB_ICON_STRING } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { RefObject } from "react";

export interface TabTitleContent {
  titleString: string;
  favIconURL: string;
}
export interface Tab {
  tabId: string;
  tabURL: string;
  tabTitleContent: TabTitleContent;
  canGoBack: boolean;
  canGoForward: boolean;
  scrollPosition: number;
}
export type BrowserState = {
  tabsList: Tab[];
  activeTabId: string;
  newTabAdded: boolean;
};

export function addNewTab(): Tab {
  return {
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
}

export type BrowserContextType = {
  handleGoBack: () => void;
  handleGoForward: () => void;
  handleReload: () => void;
  activeWebViewRef: RefObject<WebviewTag | null>;
  setActiveWebViewRef: (ref: RefObject<WebviewTag | null>) => void;
};
