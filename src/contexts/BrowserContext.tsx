import { createContext, ReactNode, RefObject, useRef, useState } from "react";
import { WebviewTag } from "electron";
// @types
import { BrowserContextType } from "../types/browser";

type BrowserProviderProps = {
  children: ReactNode;
};

const BrowserContext = createContext<BrowserContextType | null>(null);

function BrowserProvider({ children }: BrowserProviderProps) {
  const [activeWebViewRef, setActiveWebViewRef] = useState<RefObject<WebviewTag | null> | null>(null);

  // NAVIGATION ACTIONS
  const handleGoBack = () => {
    if (activeWebViewRef.current?.canGoBack()) {
      activeWebViewRef.current.goBack();
    }
  };

  const handleGoForward = () => {
    if (activeWebViewRef.current?.canGoForward()) {
      activeWebViewRef.current.goForward();
    }
  };

  const handleReload = () => {
    activeWebViewRef.current?.reload();
  };

  return (
    <BrowserContext.Provider
      value={{
        handleGoBack,
        handleGoForward,
        handleReload,
        activeWebViewRef,
        setActiveWebViewRef,
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
}

export { BrowserContext, BrowserProvider };
