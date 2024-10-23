import React, { useEffect, useState, useRef } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import { TITLEBAR_HEIGHT } from "../../utils/constants";
import { Search } from "@mui/icons-material";
import BrowserControlMenuButton from "./BrowserControlMenuButton";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import ReloadButton from "./ReloadButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { loadUrl, resetNewTabAdded } from "../../redux/slices/browserSlice";
import { createStandardURL } from "../../utils";
import UserAvatarMenu from "./UserAvatarMenu";
import { Tab } from "../../types/browser";
import useBrowser from "../../hooks/useBrowser";

function Titlebar() {
  const [enteredURL, setEnteredURL] = useState<string>("");
  const theme = useTheme();
  const { handleReload } = useBrowser();
  const dispatch = useDispatch();
  const { tabsList, activeTabId, newTabAdded } = useSelector((state: RootState) => state.browser);
  const activeTab = tabsList.find((tab: Tab) => tab.tabId === activeTabId);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (newTabAdded) {
      inputRef.current?.focus(); // Focus on input when a new tab is added
      dispatch(resetNewTabAdded()); // Reset the newTabAdded state
    }
  }, [newTabAdded, dispatch]);

  useEffect(() => {
    const listenEnterPress = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        if (enteredURL !== "") {
          dispatch(loadUrl({ tabId: activeTab.tabId, url: createStandardURL(enteredURL) }));
          handleReload();
          inputRef.current?.blur(); // Remove focus after entering the URL
        }
      }
    };

    window.addEventListener("keypress", listenEnterPress);

    return () => window.removeEventListener("keypress", listenEnterPress);
  }, [enteredURL, activeTab, dispatch]);

  useEffect(() => {
    const activeTab = tabsList.find((tab: Tab) => tab.tabId === activeTabId);
    console.log(activeTab, "activeTab")
    if (activeTab) {
      setEnteredURL(activeTab.tabURL);
    }
  }, [tabsList, activeTabId]);

  useEffect(() => {
    const activeTab = tabsList.find((tab: Tab) => tab.tabId === activeTabId);
    if (activeTab && activeTab.tabURL === "") {
      inputRef.current?.focus();
    }
  }, [tabsList, activeTabId]);

  const handleOnURLChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredURL(ev.target.value);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "nowrap",
        padding: "0 100px 0 1rem",
        position: "relative",
        height: TITLEBAR_HEIGHT,
        backgroundColor: theme.palette.mode === "dark" ? "#3D3D3D" : theme.palette.primary.light,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <BackButton />
        <ForwardButton />
        <ReloadButton />
      </Box>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          bgcolor: theme.palette.mode === "light" ? theme.palette.background.paper : "#000",
          height: 34,
          border: `none`,
          borderRadius: "25px",
          position: "relative",
          padding: "0 8px 0 1rem",
        }}
      >
        <TextField
          placeholder="search google or enter address"
          onChange={handleOnURLChange}
          value={enteredURL}
          inputRef={inputRef}
          sx={{
            height: "100%",
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            position: "relative",
          }}
          slotProps={{
            input: {
              sx: {
                height: "100%",
                width: "100%",
                fontSize: 14,
                color: theme.palette.text.primary,
                fontWeight: 400,
              },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 34,
            width: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Search style={{ fontSize: 16, color: "#B7B7B6" }} />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "12px",
          transform: "translateY(-50%)",
          height: 30,
          width: 100,
          bgcolor: "transparent",
          display: "flex",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "4px",
          zIndex: 10,
        }}
      >
        <UserAvatarMenu />
        <BrowserControlMenuButton />
      </Box>
    </Box>
  );
}

export default Titlebar;
