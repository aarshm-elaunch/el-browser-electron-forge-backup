import { Box, useTheme } from "@mui/material";
import React from "react";
import { TABSBAR_HEIGHT } from "../../utils/constants";
import { CustomTabs } from "./CustomTabs";
import { CustomTab } from "./CustomTab";
import { TabContent } from "./CustomTabContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/slices/browserSlice";

const TabsBar = () => {
  const theme = useTheme();
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
        // bgcolor: theme.palette.mode === "light" ? theme.palette.primary.light : "#2B2B29",
      }}
    >
      <CustomTabs sx={{ alignItems: "flex-end", bgcolor: 'inherit' }} value={activeTabId} onChange={handleTabChange}>
        {tabsList.map((tab) => (
          <CustomTab
            className="window-no-drag"
            disableRipple
            key={tab.tabId}
            label={<TabContent {...tab} />}
            selected={activeTabId === tab.tabId}
            value={tab.tabId}
          />
        ))}
      </CustomTabs>
    </Box>
  );
};

export default TabsBar;
