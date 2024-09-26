import React, { useEffect, useRef } from "react";
import { TABSBAR_HEIGHT, TITLEBAR_HEIGHT } from "../../utils/constants";

const WebView = () => {
  const webviewRef = useRef<HTMLWebViewElement>(null);
  useEffect(() => {
    if (webviewRef.current !== null) {
      webviewRef.current.src = "https://www.google.com";
    }
  }, [webviewRef]);
  return (
    <webview
      style={{
        height: `calc(100vh - ${TITLEBAR_HEIGHT + TABSBAR_HEIGHT}px)`,
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexGrow: 1,
      }}
      ref={webviewRef}
    />
  );
};

export default WebView;
