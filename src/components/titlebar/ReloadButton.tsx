import { RefreshOutlined } from "@mui/icons-material";
import { alpha, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import useBrowser from "../../hooks/useBrowser";

const ReloadButton = () => {
  const theme = useTheme();
  const {
    handleReload,
    state: { activeTab },
  } = useBrowser();

  const handleClick = () => {
    handleReload(activeTab.tabId);
  };

  return (
    <Tooltip
      title="Reload this page"
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
        id="reload-button"
        onClick={handleClick}
      >
        <RefreshOutlined style={{ fontSize: 18 }} />
      </IconButton>
    </Tooltip>
  );
};

export default ReloadButton;
