import { Box, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { TABSBAR_HEIGHT } from "../../utils/constants";
import { CustomTabs } from "./CustomTabs";
import { CustomTab } from "./CustomTab";
import { TabContent } from "./CustomTabContent";
import useBrowser from "../../hooks/useBrowser";

function TabsBar() {
  const theme = useTheme();
  const {
    state: { tabsList, activeTab },
    handleSetActiveTab,
  } = useBrowser();

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    handleSetActiveTab(newValue);
  };

  useEffect(() => {
    console.log(tabsList);
  },[tabsList])

  return (
    <Box
      sx={{
        height: TABSBAR_HEIGHT,
        width: "100vw",
        bgcolor: theme.palette.mode === "light" ? theme.palette.primary.light : "#2B2B29",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <CustomTabs value={activeTab.tabId} onChange={handleTabChange}>
        {tabsList.map((tab) => (
          <CustomTab disableRipple key={tab.tabId} label={<TabContent {...tab} />} selected={tab.isActive} value={tab.tabId}/>
        ))}
      </CustomTabs>
    </Box>
  );
}

export default TabsBar;
