import { Close } from "@mui/icons-material";
import { alpha, Box, Typography } from "@mui/material";
import { useState } from "react";
import { Tab } from "../../types/browser";
import { useDispatch } from "react-redux";
import { closeTab } from "../../redux/slices/browserSlice";

// Custom favicon + title display for the tab content
export const TabContent = ({ tabId, tabTitleContent }: Tab) => {
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleCloseTab = () => {
    dispatch(closeTab(tabId));
  };

  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        pl: "8px",
        width: "100%",
        height: "100%",
        bgcolor: "transparent",
      }}
    >
      <Box
        sx={{
          width: 12,
          position: "absolute",
          top: "50%",
          right: "8px",
          transform: "translateY(-50%)",
          display: isHovering ? "flex" : "none",
        }}
      >
        <Box
          sx={{
            p: "2px",
            height: 16,
            width: 16,
            borderRadius: "2px",
            "&:hover": { bgcolor: alpha("#fff", 0.1) },
          }}
          onClick={handleCloseTab}
        >
          <Close style={{ fontSize: 14 }} />
        </Box>
      </Box>
      <Box
        component={"img"}
        src={tabTitleContent.favIconURL}
        alt="favicon"
        sx={{
          width: "16px",
          height: "16px",
          marginRight: "8px",
          borderRadius: "50%",
        }}
      />
      <Typography component={"span"} fontSize={12} fontWeight={500} sx={{ textTransform: "capitalize" }}>
        {tabTitleContent.titleString}
      </Typography>
    </Box>
  );
};
