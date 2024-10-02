import React from "react";
import UserView from "./UserView";
import AuthView from "./AuthView";

const Views = () => {
  const isAuthenticated = true;
  return <>{isAuthenticated ? <UserView /> : <AuthView />}</>;
};

export default Views;
