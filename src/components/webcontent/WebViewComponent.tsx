/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useRef } from "react";
import { updateTabState } from "../../redux/slices/browserSlice";
import useBrowser from "../../hooks/useBrowser";
import { usePostAccountHistoryMutation } from "../../redux/api/browseHistoryApi";
import { Tab } from "../../types/browser";
import { WebviewTag } from "electron";

const WebViewComponent = ({ tab }: { tab: Tab }) => {
  const webviewRef = useRef<WebviewTag | null>(null);
  const { setActiveWebViewRef } = useBrowser();
  const dispatch = useDispatch();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);
  const [postHistory] = usePostAccountHistoryMutation();

  useEffect(() => {
    const activeTab = tabsList.find((tab: Tab) => tab.tabId === activeTabId);
    if (webviewRef.current) {
      const updateNavigationState = (ev: any) => {
        const { url } = ev;
        webviewRef.current
          .executeJavaScript(
            `
    const getFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]')?.href || 
                      document.querySelector('link[rel="shortcut icon"]')?.href || 
                      document.querySelector('link[rel="apple-touch-icon"]')?.href || 
                      document.querySelector('link[rel="mask-icon"]')?.href || 
                      document.querySelector('link[rel="favicon"]')?.href;

      if (favicon) {
        return favicon;
      }

      // If no favicon found, fallback to Google's Favicon service
      const url = new URL(window.location.href);
      return \`https://www.google.com/s2/favicons?domain=\${url.hostname}\`;
    };

    const title = document.title || "Untitled";
    const favicon = getFavicon();
    ({ title, favicon });
  `
          )
          .then((result) => {
            const { title, favicon } = result;
            dispatch(
              updateTabState({
                tabId: activeTab.tabId,
                canGoBack: webviewRef.current?.canGoBack() || false,
                canGoForward: webviewRef.current?.canGoForward() || false,
                scrollPos: activeTab.scrollPosition,
                tabURL: url,
                tabTitleContent: { favIconURL: favicon, titleString: title },
              })
            );
            postHistory({
              url,
              title: title || "Untitled",
              favicon: favicon || "",
            });
          })
          .catch((error) => {
            console.error("Failed to extract metadata:", error);
          });
      };

      webviewRef.current.addEventListener("did-navigate", updateNavigationState);
      webviewRef.current.addEventListener("did-navigate-in-page", updateNavigationState);
      webviewRef.current.addEventListener("did-finish-load", updateNavigationState);

      return () => {
        webviewRef.current?.removeEventListener("did-navigate", updateNavigationState);
        webviewRef.current?.removeEventListener("did-navigate-in-page", updateNavigationState);
        webviewRef.current?.removeEventListener("did-finish-load", updateNavigationState);
      };
    }
  }, [tab, webviewRef]);

  useEffect(() => {
    const activeTab = tabsList.find((tab: Tab) => tab.tabId === activeTabId);
    if (tab.tabId === activeTab.tabId) {
      setActiveWebViewRef(webviewRef); // Set the active webview ref in the context
    }
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
