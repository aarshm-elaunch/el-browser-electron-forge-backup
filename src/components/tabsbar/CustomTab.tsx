import { Tab } from "@mui/material";
import { styled } from "@mui/system";
import { TAB_MAX_WIDTH, TABSBAR_HEIGHT } from "../../utils/constants";
import zIndex from "@mui/material/styles/zIndex";

// Custom styled Tab component
export const CustomTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "selected", // Allows the `selected` prop to be used
})<{ selected?: boolean }>(({ selected }) => ({
  minHeight: "unset",
  height: `calc(${TABSBAR_HEIGHT}px - 8px)`,
  minWidth: "20px",
  maxWidth: TAB_MAX_WIDTH,
  flexGrow: 1,
  flexShrink: 1,
  color: "white",
  margin: "0",
  padding: "0",
  // display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  width: "auto",
  "&:hover": {
    backgroundColor: "unset",
  },
  transition: "background-color 0.1s",
  border: "none",
  borderBottom: 0,
  position: "relative",
  borderRadius: "12px 12px 0 0", // Top rounded corners

  // "&:after, &:before": {
  //   content: "''",
  //   width: "20px",
  //   height: "20px",
  //   backgroundColor: "#fff",
  //   position: "absolute",
  //   display: selected ? "flex" : "none",
  // },

  // "&:after": {
  //   borderRadius: "0 0 12px 0", // Bottom-right rounded corner
  //   left: "-16px",
  //   bottom: "-2px",
  //   backgroundColor: "transparent",
  //   border: "4px solid #2A2A27",
  //   borderTop: "none",
  //   borderLeft: "none",
  // },

  // "&:before": {
  //   borderRadius: "0 0 0 12px", // Bottom-left rounded corner
  //   right: "-16px",
  //   bottom: "-2px",
  //   backgroundColor: "transparent",
  //   border: "4px solid #2A2A27",
  //   borderTop: "none",
  //   borderRight: "none",
  // },
}));
