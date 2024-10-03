import { Toaster } from "sonner";
import AuthView from "./AuthView";
import UserView from "./UserView";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetMyAccountQuery } from "../redux/api/authApi";
import { useEffect } from "react";
import { User } from "src/types/data";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/slices/authSlice";

const Views = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { data, refetch } = useGetMyAccountQuery(null, {
    skip: !isAuthenticated
  });
  const dispactch = useDispatch()
  useEffect(() => {
    if (data) {
      const userInfoObj: User = {
        email: data.email,
        id: data._id,
        profileImage: data.profileImage,
        role: data.role,
        username: data.username
      }
      dispactch(setUserInfo(userInfoObj))
    }
  }, [data])

  return <>
    {isAuthenticated ? <UserView /> : <AuthView />}
    <Toaster richColors position="top-right" />
  </>;
};

export default Views;
