import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useBrowser from "../hooks/useBrowser";
import { TABSBAR_HEIGHT, TITLEBAR_HEIGHT } from "../utils/constants";
import { Tab } from "../types/browser";
import StartPage from "./StartPage";
import WebContentPage from "./WebContentPage";

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
  const [decideWebViewHeight, setDecideWebViewHeight] = useState<number>(0);
  const {
    state: { tabsList, activeTab },
  } = useBrowser();

  useEffect(() => {
    if (tabsList.length > 1) {
      setDecideWebViewHeight(TITLEBAR_HEIGHT + TABSBAR_HEIGHT);
    } else {
      setDecideWebViewHeight(TITLEBAR_HEIGHT);
    }
  }, [tabsList]);

  useEffect(() => {
    if (activeTab !== null) {
      setLoaded(true);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 100);
    }
  }, [activeTab]);

  if (!loaded) {
    return (
      <Box
        sx={{
          width: "100%",
          height: `calc(100vh - ${decideWebViewHeight}px)`,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (loaded && activeTab === null) {
    return (
      <Box
        sx={{
          width: "100%",
          height: `calc(100vh - ${decideWebViewHeight}px)`,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: (theme) => theme.palette.text.disabled, fontSize: 16, fontWeight: 600 }}>Oops! Something went wrong.</Typography>
        <Typography sx={{ color: (theme) => theme.palette.text.disabled, fontSize: 14, fontWeight: 500 }}>
          It looks like there's an issue initializing the browser. Please try opening a new tab.
        </Typography>
        <Typography sx={{ color: (theme) => theme.palette.text.disabled, fontSize: 14, fontWeight: 500 }}>
          If the problem persists, you may need to restart the application.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {tabsList.length > 0 &&
        tabsList.map((tab) => {
          if (tab.tabURL === "about:blank") {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={decideWebViewHeight} key={tab.tabId}>
                <StartPage />
              </CustomTabPanel>
            );
          } else {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={decideWebViewHeight} key={tab.tabId}>
                <WebContentPage />
              </CustomTabPanel>
            );
          }
        })}
    </>
  );
};

export default BrowserContent;
