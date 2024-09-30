import { MoreVert } from "@mui/icons-material";
import { alpha, IconButton, Menu, MenuItem, Tooltip, useTheme } from "@mui/material";
import React from "react";

const BrowserControlMenuButton = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip
        title="Customise and control browser"
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
          id="browser-control-button"
          aria-controls={open ? "browser-control-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVert style={{ fontSize: 20 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "browser-control-button",
        }}
      >
        <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
          History
        </MenuItem>
        <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
          Download
        </MenuItem>
        <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
          Settings
        </MenuItem>
      </Menu>
    </>
  );
};

export default BrowserControlMenuButton;
