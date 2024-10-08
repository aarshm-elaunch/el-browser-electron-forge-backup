import { ArrowBack } from "@mui/icons-material";
import { alpha, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import useBrowser from "../../hooks/useBrowser";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const BackButton = () => {
  const theme = useTheme();
  const { handleGoBack } = useBrowser();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);
  const activeTab = tabsList.find((tab) => tab.tabId === activeTabId);

  const handleClick = () => {
    if (activeTab) {
      handleGoBack();
    }
  };

  return (
    <Tooltip
      title="Click to go back"
      enterDelay={1000}
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            borderRadius: "2px !important",
            marginTop: "4px !important",
          },
        },
      }}
    >
      <IconButton
        disabled={!activeTab.canGoBack}
        disableRipple
        sx={{
          padding: 0,
          height: 30,
          width: 30,
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: theme.palette.mode === "dark" ? alpha(theme.palette.grey[300], 0.1) : alpha(theme.palette.primary.main, 0.1),
          },
          color: "#B7B7B6",
        }}
        id="back-button"
        onClick={handleClick}
      >
        <ArrowBack style={{ fontSize: 18 }} />
      </IconButton>
    </Tooltip>
  );
};

export default BackButton;
