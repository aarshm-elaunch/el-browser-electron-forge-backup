import { Box } from "@mui/material";
import React from "react";
import { SUMMIT_HEIGHT } from "../../utils/constants";
import TabsBar from "../tabsbar";
import Titlebar from "../titlebar";

const BrowserSummit = () => {
  return (
    <Box sx={{ height: SUMMIT_HEIGHT, width: "100vw", bgcolor: "transparent" }}>
      <TabsBar />
      <Titlebar />
    </Box>
  );
};

export default BrowserSummit;
