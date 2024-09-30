import { useContext } from "react";
import { BrowserContext } from "../contexts/BrowserContext";

// ----------------------------------------------------------------------

const useBrowser = () => {
  const context = useContext(BrowserContext);

  if (!context) throw new Error("Browser context must be used inside BrowserProvider");

  return context;
};

export default useBrowser;
