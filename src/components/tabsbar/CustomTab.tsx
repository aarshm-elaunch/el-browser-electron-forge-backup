import { Tab } from "@mui/material";
import { styled } from "@mui/system";
import { TAB_MAX_WIDTH, TABSBAR_HEIGHT } from "../../utils/constants";

// Custom styled Tab component
export const CustomTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "selected", // Allows the `selected` prop to be used
})<{ selected?: boolean }>(({ selected }) => ({
  minHeight: 'unset',
  height: `calc(${TABSBAR_HEIGHT}px - 8px)`,
  minWidth: "unset",
  maxWidth: TAB_MAX_WIDTH,
  flexGrow: 1,
  backgroundColor: selected ? "#2A2927" : "#171715",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  color: "white",
  padding: "0 12px 0",
  display: "flex",
  flexWrap: "nowrap",
  width: "fit-content",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: selected ? "#2A2927" : "#22211F",
  },
  transition: "background-color 0.1s",
}));
