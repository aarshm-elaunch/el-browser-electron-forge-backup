import React from "react";
import TabsBar from "../components/tabsbar";
import Titlebar from "../components/titlebar";
import useBrowser from "../hooks/useBrowser";
import BrowserContent from "../pages";

const UserView = () => {
  const {
    state: { tabsList },
  } = useBrowser();
  return (
    <>
      <Titlebar />
      {tabsList.length > 1 && <TabsBar />}
      <BrowserContent />
    </>
  );
};

export default UserView;
