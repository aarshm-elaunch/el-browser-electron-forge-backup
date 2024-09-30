import { Add } from "@mui/icons-material";
import { alpha, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import useBrowser from "../../hooks/useBrowser";

const OpenNewTabButton = () => {
  const theme = useTheme();
  const { handleAddTab } = useBrowser();

  return (
    <Tooltip
      title="New Tab"
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
        onClick={handleAddTab}
      >
        <Add style={{ fontSize: 20 }} />
      </IconButton>
    </Tooltip>
  );
};

export default OpenNewTabButton;
