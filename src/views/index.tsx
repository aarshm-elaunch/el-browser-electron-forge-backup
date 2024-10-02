import { Toaster } from "sonner";
import AuthView from "./AuthView";
import UserView from "./UserView";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { ipcRenderer } from "electron";
import { useGetMyAccountQuery } from "../redux/api/authApi";

const Views = () => {
  const {isAuthenticated} = useSelector((state:RootState)=>state.auth);
  return <>
  {isAuthenticated ? <UserView /> : <AuthView />}
  <Toaster richColors position="top-right"/>
  </>;
};

export default Views;
