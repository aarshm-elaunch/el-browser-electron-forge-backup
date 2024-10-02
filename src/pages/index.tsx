import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SUMMIT_HEIGHT} from "../utils/constants";
import { Tab } from "../types/browser";
import StartPage from "./StartPage";
import WebContentPage from "./WebContentPage";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setActiveTab } from "../redux/slices/browserSlice";

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

  if (!loaded) {
    return (
      <Box
        sx={{
          width: "100%",
          height: `calc(100vh - ${SUMMIT_HEIGHT}px)`,
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

  if (loaded && !activeTab) {
    return (
      <Box
        sx={{
          width: "100%",
          height: `calc(100vh - ${SUMMIT_HEIGHT}px)`,
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
        activeTab &&
        loaded &&
        tabsList.map((tab) => {
          if (tab.tabURL === "about:blank") {
            return (
              <CustomTabPanel value={tab.tabId} activeTab={activeTab} panelHeight={SUMMIT_HEIGHT} key={tab.tabId}>
                <StartPage />
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
