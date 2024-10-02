import React from "react";
import TabsBar from "../components/tabsbar";
import Titlebar from "../components/titlebar";
import BrowserContent from "../pages";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const UserView = () => {
  const { tabsList } = useSelector((state: RootState) => state.browser);

  return (
    <>
      <Titlebar />
      {tabsList.length > 1 && <TabsBar />}
      <BrowserContent />
    </>
  );
};

export default UserView;
