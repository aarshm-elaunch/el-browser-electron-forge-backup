import { styled, Tabs } from "@mui/material";
import { TABSBAR_HEIGHT } from "../../utils/constants";

export const CustomTabs = styled(Tabs)({
  minHeight: TABSBAR_HEIGHT,
  height: "100%",
  width: "100%",
  backgroundColor: "#171715",
  display: "flex",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});
