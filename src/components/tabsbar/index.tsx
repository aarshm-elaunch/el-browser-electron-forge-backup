import { AppBar, Box, Tab, Tabs, useTheme } from "@mui/material";
import React from "react";
import { TABSBAR_HEIGHT } from "../../utils/constants";

function TabsBar() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        height: TABSBAR_HEIGHT,
        width: "100vw",
        bgcolor:
          theme.palette.mode === "light"
            ? theme.palette.primary.light
            : "#3D3D3D",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "transparent", height: "100%" }}>
        <Tabs value={value} onChange={handleChange} sx={{ height: "100%" }}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
    </Box>
  );
}

export default TabsBar;
