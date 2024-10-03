import { Add } from "@mui/icons-material";
import { alpha, IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addTab } from "../../redux/slices/browserSlice";

const OpenNewTabButton = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleAddNewTab = () => {
    dispatch(addTab());
  };

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
        onClick={handleAddNewTab}
        sx={{
          width: "80%",
          height: "80%",
          p: "2px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            bgcolor: alpha(theme.palette.primary.main, 0.3),
          },
        }}
      >
        <Add style={{ fontSize: "16px" }} />
      </IconButton>
    </Tooltip>
  );
};

export default OpenNewTabButton;
