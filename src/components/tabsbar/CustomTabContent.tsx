import { Close } from "@mui/icons-material";
import { alpha, Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Tab } from "../../types/browser";
import useBrowser from "../../hooks/useBrowser";

// Custom favicon + title display for the tab content
export const TabContent = ({ tabId, tabContent }: Tab) => {
  const { handleCloseTab } = useBrowser();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          left: "8px",
          transform: "translateY(-50%)",
          display: isHovering ? "flex" : "none",
        }}
      >
        <IconButton
          sx={{
            p: "2px",
            height: 16,
            width: 16,
            borderRadius: "2px",
            "&:hover": { bgcolor: alpha("#fff", 0.1) },
          }}
          onClick={() => handleCloseTab(tabId)}
        >
          <Close style={{ fontSize: 14 }} />
        </IconButton>
      </Box>
      <Box
        component={"img"}
        src={tabContent.favIconURL}
        alt="favicon"
        sx={{
          width: "16px",
          height: "16px",
          marginRight: "8px",
          borderRadius: "50%",
        }}
      />
      <Typography component={"span"} fontSize={12} fontWeight={500} sx={{ textTransform: "capitalize" }}>
        {tabContent.titleString}
      </Typography>
    </Box>
  );
};
