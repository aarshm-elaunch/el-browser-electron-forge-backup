/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { updateTabState } from "../../redux/slices/browserSlice";
import useBrowser from "../../hooks/useBrowser";

const WebViewComponent = () => {
  const dispatch = useDispatch();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);
  const { webviewRef } = useBrowser();

  useEffect(() => {
    const activeTab = tabsList.find((tab) => tab.tabId === activeTabId);
    if (webviewRef.current && activeTab) {
      // Load the URL when the active tab changes
      webviewRef.current.src = activeTab.tabURL;
      // Restore scroll position
      webviewRef.current.addEventListener("dom-ready", () => {
        webviewRef.current?.scrollTo({ top: activeTab.scrollPosition, behavior: "smooth" });
      });

      // Update navigation state (canGoBack/canGoForward) periodically or when needed
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

      // Listen for navigation state changes
      webviewRef.current.addEventListener("did-navigate", updateNavigationState);
      webviewRef.current.addEventListener("did-navigate-in-page", updateNavigationState);

      // Clean up listeners when component is unmounted or when activeTab changes
      return () => {
        webviewRef.current?.removeEventListener("did-navigate", updateNavigationState);
        webviewRef.current?.removeEventListener("did-navigate-in-page", updateNavigationState);
      };
    }
  }, [activeTabId, webviewRef]);

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
      ref={webviewRef}
    />
  );
};

export default WebViewComponent;
