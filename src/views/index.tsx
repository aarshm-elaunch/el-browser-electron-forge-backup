/* eslint-disable import/no-unresolved */
import { Toaster } from "sonner";
import AuthView from "./AuthView";
import UserView from "./UserView";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Views = () => {
  const {isAuthenticated} = useSelector((state:RootState)=>state.auth);
  return <>
  {isAuthenticated ? <UserView /> : <AuthView />}
  <Toaster richColors position="top-right"/>
  </>;
};

export default Views;
