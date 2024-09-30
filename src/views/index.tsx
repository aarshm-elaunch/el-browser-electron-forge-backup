import React from "react";
import UserView from "./UserView";
import AuthView from "./AuthView";
import { BrowserProvider } from "../contexts/BrowserContext";
import useBrowser from "../hooks/useBrowser";

const Views = () => {
  const {
    state: { isAuthenticated },
  } = useBrowser();

  return (
    <>
      {isAuthenticated ? <UserView /> : <AuthView />}
    </>
  );
};

export default Views;
