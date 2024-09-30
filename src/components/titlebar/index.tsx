import React, { useEffect, useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import { TITLEBAR_HEIGHT } from "../../utils/constants";
import { Search } from "@mui/icons-material";
import BrowserControlMenuButton from "./BrowserControlMenuButton";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import ReloadButton from "./ReloadButton";
import OpenNewTabButton from "./OpenNewTabButton";
import useBrowser from "../../hooks/useBrowser";

function Titlebar() {
  const [enteredURL, setEnteredURL] = useState<string>("");
  const theme = useTheme();
  const {
    state: { activeTab },
    handleLoadUrl,
  } = useBrowser();

  useEffect(() => {

    const listenEnterPress = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        if (enteredURL !== "") {
          handleLoadUrl(activeTab.tabId, enteredURL);
        }
      }
    };

    document.addEventListener("keydown", listenEnterPress);

    return () => document.removeEventListener("keydown", listenEnterPress);
    
  }, [enteredURL, activeTab]);

  const handleOnURLChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredURL(ev.target.value);
  };

  return (
    <Box
      className="titlebar"
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "nowrap",
        padding: "0 100px",
        position: "relative",
        height: TITLEBAR_HEIGHT,
        backgroundColor: theme.palette.mode === "dark" ? "#2B2B29" : theme.palette.primary.light,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }} className="no-drag">
        <BackButton />
        <ForwardButton />
        <ReloadButton />
      </Box>
      <Box
        className="no-drag"
        sx={{
          width: "100%",
          bgcolor: theme.palette.mode === "light" ? theme.palette.background.paper : "#282828",
          height: 30,
          maxWidth: "60%",
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "4px",
          position: "relative",
          padding: "0 8px 0 1rem",
        }}
      >
        <TextField
          placeholder="search google or enter address"
          onChange={handleOnURLChange}
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
            height: 30,
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
        className="no-drag"
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
          zIndex: 10,
        }}
      >
        {/* <OpenNewTabButton /> */}
        <BrowserControlMenuButton />
      </Box>
    </Box>
  );
}

export default Titlebar;
