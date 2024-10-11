import { Close } from "@mui/icons-material";
import { alpha, Box, Typography } from "@mui/material";
import { Tab } from "../../types/browser";
import { useDispatch, useSelector } from "react-redux";
import { closeTab } from "../../redux/slices/browserSlice";
import { cloneDeep } from "lodash";
import { RootState } from "../../redux/store";
import { TABSBAR_HEIGHT } from "../../utils/constants";
import { useState } from "react";

interface TabContent {
  tabContentProps: Tab;
  selected: boolean;
}

// Custom favicon + title display for the tab content
export const TabContent = ({ tabContentProps, selected }: TabContent) => {
  const dispatch = useDispatch();
  const { tabId, tabTitleContent } = tabContentProps;
  const { tabsList } = useSelector((state: RootState) => state.browser);
  const [beingHovered, setBeingHovered] = useState<boolean>(false);

  const handleCloseTab = () => {
    const clonedTabsList = cloneDeep(tabsList);
    const filteredTabs = clonedTabsList.filter((tab: Tab) => tab.tabId !== tabId);

    if (filteredTabs.length === 0) {
      window.electron.ipcRenderer.send("quit-app");
    } else {
      dispatch(closeTab(tabId));
    }
  };

  return (
    <Box
      onMouseEnter={() => setBeingHovered(true)}
      onMouseLeave={() => setBeingHovered(false)}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        width: "100%",
        height: "100%",
        padding: "0 12px",
        backgroundColor: selected ? "#3D3D3D" : "#2B2B2B",
        "&:hover": {
          backgroundColor: selected ? "#3D3D3D" : "#22211F",
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: `100%`,
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          ...(beingHovered
            ? {
                background: selected
                  ? "linear-gradient(270deg, rgb(61 61 61) 85%, rgb(255 255 255 / 0%) 100%)"
                  : "linear-gradient(270deg, rgb(34 33 31) 85%, rgb(255 255 255 / 0%) 100%)",
              }
            : {
                background: selected
                  ? "linear-gradient(270deg, rgb(61 61 61) 85%, rgb(255 255 255 / 0%) 100%)"
                  : "linear-gradient(270deg, rgb(42 42 42) 85%, rgb(255 255 255 / 0%) 100%)",
              }),
        }}
      >
        <Box
          sx={{
            height: 24,
            width: 24,
            flexShrink: 0,
            borderRadius: "50%",
            "&:hover": { bgcolor: alpha("#fff", 0.1) },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "4px",
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
      <Typography component={"span"} fontSize={12} fontWeight={500} sx={{ textTransform: "capitalize", whiteSpace: "nowrap", overflow: "hidden" }}>
        {tabTitleContent.titleString}
      </Typography>
    </Box>
  );
};
