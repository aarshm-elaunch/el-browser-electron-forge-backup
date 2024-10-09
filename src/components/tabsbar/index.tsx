import { alpha, Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import { TABSBAR_HEIGHT } from "../../utils/constants";
import { CustomTabs } from "./CustomTabs";
import { CustomTab } from "./CustomTab";
import { TabContent } from "./CustomTabContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/slices/browserSlice";
import OpenNewTabButton from "../titlebar/OpenNewTabButton";

const TabsBar = () => {
  const dispatch = useDispatch();
  const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(setActiveTab(newValue));
  };

  return (
    <Box
      className={"window-drag"}
      sx={{
        height: TABSBAR_HEIGHT,
        width: "100%",
        padding: "0 80px",
      }}
    >
      <CustomTabs
        sx={{ alignItems: "flex-end", bgcolor: "inherit", display: "flex", flexWrap: "nowrap", flexShrink: 1 }}
        value={activeTabId}
        scrollButtons={false}
        onChange={handleTabChange}
      >
        {tabsList.map((tab) => (
          <CustomTab
            className="window-no-drag"
            disableRipple
            key={tab.tabId}
            label={<TabContent selected={activeTabId === tab.tabId} tabContentProps={tab} />}
            selected={activeTabId === tab.tabId}
            value={tab.tabId}
          />
        ))}
        <Box
          className={"window-no-drag"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(${TABSBAR_HEIGHT}px - 8px)`,
            width: `calc(${TABSBAR_HEIGHT}px - 8px)`,
          }}
        >
          <OpenNewTabButton />
        </Box>
      </CustomTabs>
    </Box>
  );
};

export default TabsBar;
