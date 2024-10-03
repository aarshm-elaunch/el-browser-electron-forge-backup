/* eslint-disable import/no-unresolved */
import { LogoutOutlined } from "@mui/icons-material";
import { alpha, Avatar, Box, Button, Divider, IconButton, Menu, Tooltip, Typography, useTheme } from "@mui/material";
import { toast } from "sonner";
import React from "react";
import { useGetMyAccountQuery, useLogoutMutation } from "../../redux/api/authApi";

const UserAvatarMenu = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { data } = useGetMyAccountQuery();
  const [logoutFunc] = useLogoutMutation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogOut = async () => {
    try {
      const response = await logoutFunc()
        .unwrap()
        .then(() => {
          toast.success("Logout Successful", { position: "bottom-right" });
        });
    } catch (error: any) {
      toast.error(error.data.message, { position: "bottom-right" });
    }
  };

  return (
    <>
      <Tooltip
        title=""
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
            height: 32,
            width: 32,
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark" ? alpha(theme.palette.grey[300], 0.1) : alpha(theme.palette.primary.main, 0.1),
            },
            color: "#B7B7B6",
          }}
          id="user-avatar-button"
          aria-controls={open ? "user-avatar-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src="" sx={{ width: 20, height: 20 }} alt="A" />
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
        <Box
          sx={{
            width: "fit-content",
            minWidth: 200,
            height: "fit-content",
            padding: "8px 12px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: 'center',
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {data && (
            <Typography fontSize={14} fontWeight={500} component={"p"}>
              {data.email}
            </Typography>
          )}
          <Divider sx={{ width: "100%", color: theme.palette.divider, mb: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <Button
              startIcon={<LogoutOutlined style={{ fontSize: 14 }} />}
              sx={{
                fontSize: 12,
                textTransform: "capitalize",
                height: 32,
                minWidth: "unset",
                bgcolor: alpha(theme.palette.error.dark, 1),
                "&:hover": { bgcolor: alpha(theme.palette.error.dark, 0.9) },
              }}
              variant="contained"
              onClick={handlelogOut}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default UserAvatarMenu;
