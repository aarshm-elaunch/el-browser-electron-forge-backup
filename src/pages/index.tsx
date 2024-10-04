import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SUMMIT_HEIGHT } from "../utils/constants";
import { Tab } from "../types/browser";
import WebContentPage from "./WebContentPage";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setActiveTab } from "../redux/slices/browserSlice";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
import DownloadHistoryPage from "./DownloadHistoryPage";

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
      hidden={value !== activeTab.tabId}
      id={`browser-tabpanel-${activeTab.tabId}`}
      aria-labelledby={`browser-tab-${activeTab.tabId}`}
    >
      {value === activeTab.tabId && (
        <Box
          sx={{
            height: `calc(100vh - ${panelHeight}px)`,
            overflow: "hidden",
            width: "100%",
            display: "flex",
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const BrowserContent = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);
  const activeTab = tabsList.find((tab) => tab.tabId === activeTabId);

  useEffect(() => {
    if (!activeTab && tabsList.length > 0) {
      dispatch(setActiveTab(tabsList[0].tabId));
    }
  }, [activeTab, tabsList, dispatch]);

  useEffect(() => {
    if (activeTab) {
      setLoaded(true);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 100);
    }
  }, [activeTab]);

  return (
    <>
      {tabsList.length > 0 &&
        activeTab &&
        loaded &&
        tabsList.map((tab) => {
          if (tab.tabURL === "about:blank") {
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
          } else {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <WebContentPage />
              </CustomTabPanel>
            );
          }
        })}
    </>
  );
};

export default BrowserContent;
