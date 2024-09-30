import { Tab } from "@mui/material";
import { styled } from "@mui/system";
import { TABSBAR_HEIGHT } from "../../utils/constants";

// Custom styled Tab component
export const CustomTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "selected", // Allows the `selected` prop to be used
})<{ selected?: boolean }>(({ selected }) => ({
  minHeight: TABSBAR_HEIGHT,
  height: "100%",
  minWidth: "unset",
  maxWidth: "unset",
  flexGrow: 1,
  backgroundColor: selected ? "#2A2927" : "#171715",
  color: "white",
  padding: "0 12px 0 0",
  display: "flex",
  flexWrap: "nowrap",
  width: "fit-content",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: selected ? "#2A2927" : "#22211F",
  },
  transition: "background-color 0.1s",
}));
