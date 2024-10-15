import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SUMMIT_HEIGHT } from "../utils/constants";
import { Tab } from "../types/browser";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setActiveTab } from "../redux/slices/browserSlice";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
import DownloadHistoryPage from "./DownloadHistoryPage";
import WebViewComponent from "../components/webcontent/WebViewComponent";
import SettingsPage from "./SettingsPage";

interface TabPanelProps {
  children?: React.ReactNode;
  value: string;
  activeTab: Tab;
  panelHeight: number;
}

function CustomTabPanel({ activeTab, panelHeight, value, children }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      style={{ display: value === activeTab.tabId ? "flex" : "none" }}
      id={`browser-tabpanel-${activeTab.tabId}`}
      aria-labelledby={`browser-tab-${activeTab.tabId}`}
    >
      <Box
        sx={{
          height: `calc(100vh - ${panelHeight}px)`,
          overflow: "hidden",
          width: "100%",
          display: value === activeTab.tabId ? "flex" : "none",
          flexGrow: 1,
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Box>
    </div>
  );
}

const BrowserContent = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);
  const activeTab = tabsList.find((tab: Tab) => tab.tabId === activeTabId);

  useEffect(() => {
    if (!activeTab && tabsList.length > 0) {
      dispatch(setActiveTab(tabsList[tabsList.length - 1].tabId));
    }
  }, [activeTab, tabsList, dispatch]);

  useEffect(() => {
    if (activeTab) {
      setLoaded(true);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 50);
    }
  }, [activeTab, tabsList]);

  return (
    <>
      {tabsList.length > 0 &&
        activeTab &&
        loaded &&
        tabsList.map((tab: Tab) => {
          if (tab.tabURL === "") {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <HomePage />
              </CustomTabPanel>
            );
          } else if (tab.tabURL === "history") {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <HistoryPage />
              </CustomTabPanel>
            );
          } else if (tab.tabURL === "downloads") {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <DownloadHistoryPage />
              </CustomTabPanel>
            );
          } else if (tab.tabURL === "setting") {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <SettingsPage />
              </CustomTabPanel>
            );
          } else {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <WebViewComponent tab={tab} webViewSrc={tab.tabURL} />
              </CustomTabPanel>
            );
          }
        })}
    </>
  );
};

export default BrowserContent;
