/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useRef } from "react";
import { updateTabState } from "../../redux/slices/browserSlice";
import useBrowser from "../../hooks/useBrowser";
import { usePostAccountHistoryMutation } from "../../redux/api/historyApi";
import { Tab } from "../../types/browser";

const WebViewComponent = ({ tab }: { tab: Tab }) => {
  const webviewRef = useRef<HTMLWebViewElement | null>(null);
  const dispatch = useDispatch();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);
  const [postHistory] = usePostAccountHistoryMutation();
  useEffect(() => {
    const activeTab = tabsList.find((tab) => tab.tabId === activeTabId);
    if (webviewRef.current) {
      const updateNavigationState = (ev: any) => {
        const { url } = ev;
        dispatch(
          updateTabState({
            tabId: activeTab.tabId,
            canGoBack: webviewRef.current?.canGoBack() || false,
            canGoForward: webviewRef.current?.canGoForward() || false,
            scrollPos: activeTab.scrollPosition,
            tabURL: url,
          })
        );
      };

      webviewRef.current.addEventListener("did-navigate", updateNavigationState);
      webviewRef.current.addEventListener("did-navigate-in-page", updateNavigationState);

      return () => {
        webviewRef.current?.removeEventListener("did-navigate", updateNavigationState);
        webviewRef.current?.removeEventListener("did-navigate-in-page", updateNavigationState);
      };
    }
  }, [tab, webviewRef]);

  useEffect(() => {
    const activeTab = tabsList.find((tab) => tab.tabId === activeTabId);
    const webview = webviewRef.current;

    if (webview && activeTab) {
      webview.addEventListener("did-finish-load", () => {
        const url = webview.src;
        const title = "";
        const favicon = "";

        postHistory({
          url,
          title: title || "Untitled",
          favicon: favicon || "",
        });
      });
    }
    return () => {
      if (webview) {
        webview.removeEventListener("did-finish-load", () => { });
      }
    };
  }, [tab]);

  return (
    <webview
      style={{
        height: `100%`,
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
      src={tab.tabURL}
      ref={webviewRef}
    />
  );
};

export default WebViewComponent;