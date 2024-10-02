import { createContext, ReactNode, useRef } from "react";

// @types
import { BrowserContextType } from "../types/browser";

type BrowserProviderProps = {
  children: ReactNode;
};

const BrowserContext = createContext<BrowserContextType | null>(null);

function BrowserProvider({ children }: BrowserProviderProps) {
  const webviewRef = useRef<HTMLWebViewElement | null>(null);

  // NAVIGATION ACTIONS
  const handleGoBack = () => {
    if (webviewRef.current?.canGoBack()) {
      webviewRef.current.goBack();
    }
  };

  const handleGoForward = () => {
    if (webviewRef.current?.canGoForward()) {
      webviewRef.current.goForward();
    }
  };

  const handleReload = () => {
    webviewRef.current?.reload();
  };

  return (
    <BrowserContext.Provider
      value={{
        handleGoBack,
        handleGoForward,
        handleReload,
        webviewRef,
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
}

export { BrowserContext, BrowserProvider };
