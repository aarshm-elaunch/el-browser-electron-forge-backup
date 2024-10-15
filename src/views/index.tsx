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
import useBrowser from "../hooks/useBrowser";

const Views = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { handleReload } = useBrowser()
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
        username: data.username,
        twoFactorEnabled: data.twoFactor.enabled
      }
      dispactch(setUserInfo(userInfoObj))
    }
  }, [data])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault();
        handleReload()
      }
      if (event.key === 'F5') {
        event.preventDefault();
        handleReload()
      }
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'r') {
        event.preventDefault();
        handleReload()
      }
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 't') {
        event.preventDefault();
        handleReload()
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>
    {isAuthenticated ? <UserView /> : <AuthView />}
    <Toaster position="bottom-right" />
  </>;
};

export default Views;
