import { ArrowBack } from "@mui/icons-material";
import { alpha, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";

const BackButton = () => {
  const theme = useTheme();
  const handleClick = () => {
    return;
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
        disableRipple
        sx={{
          padding: 0,
          height: 30,
          width: 30,
          borderRadius: "4px",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : alpha(theme.palette.primary.main, 0.1),
          },
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
