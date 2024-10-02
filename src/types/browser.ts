import { NEWTAB_ICON_STRING } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

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
  activeTabId:string
};

export function addNewTab(): Tab {
  return {
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
}

export type BrowserContextType = {
  handleGoBack: () => void;
  handleGoForward: () => void;
  handleReload: () => void;
  webviewRef: React.RefObject<HTMLWebViewElement>;
};
