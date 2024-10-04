import { MoreVert } from "@mui/icons-material";
import { alpha, Box, IconButton, Menu, MenuItem, Tooltip, useTheme } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openDownloadTab, openHistoryTab } from "../../redux/slices/browserSlice";
import { DownloadIcon, HistoryIcon, NextIcon } from "../icons";

const BrowserControlMenuButton = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDownloadHistory = () => {
    dispatch(openDownloadTab());
    handleClose()
  };

  const handleOpenUserHistory = () => {
    dispatch(openHistoryTab());
    handleClose()
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
          <MoreVert style={{ fontSize: 22 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "browser-control-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            top: '110px !important',
            backgroundColor: "rgba(255, 255, 255, 1)",
            width: "250px",
            borderRadius: '26px',
            "& .MuiList-root": {
              padding: '15px',
              "& .MuiMenuItem-root": {
                color: '#656565',
                fontSize: 16,
                fontWeight: 400,
                padding: '10px',
                borderRadius: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                "& .first_part": {
                  "& svg": {
                    "& path": {
                      stroke: '#656565'
                    }
                  }
                },
                "& .end_part": {
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: '1px solid rgba(28, 28, 30, 0.3)',
                  "& svg": {
                    "& path": {
                      stroke: '#1C1C1E',
                      strokeWidth: '1px'
                    }
                  }
                },
                "&:hover": {
                  backgroundColor: 'rgba(241, 243, 244, 1)',
                  color: '#000',
                  fontWeight: 500,
                  "& .first_part": {
                    "& svg": {
                      "& path": {
                        stroke: '#000'
                      }
                    }
                  },
                  "& .end_part": {
                    background: '#000',
                    border: '1px solid #000',
                    "& svg": {
                      "& path": {
                        stroke: '#fff'
                      }
                    }
                  },
                }
              }
            }
          }
        }}
      >
        <MenuItem sx={{ fontSize: 14 }} onClick={handleOpenUserHistory}>
          <Box className="first_part" sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <HistoryIcon />
            History
          </Box>
          <Box className="end_part">
            <NextIcon />
          </Box>
        </MenuItem>
        <MenuItem sx={{ fontSize: 14 }} onClick={handleOpenDownloadHistory}>
          <Box className="first_part" sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <DownloadIcon />
            Download
          </Box>
          <Box className="end_part">
            <NextIcon />
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default BrowserControlMenuButton;
