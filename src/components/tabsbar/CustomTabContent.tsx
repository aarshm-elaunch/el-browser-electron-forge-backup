import { Close } from "@mui/icons-material";
import { alpha, Box, Typography } from "@mui/material";
import { Tab } from "../../types/browser";
import { useDispatch, useSelector } from "react-redux";
import { closeTab } from "../../redux/slices/browserSlice";
import { cloneDeep } from "lodash";
import { RootState } from "../../redux/store";

// Custom favicon + title display for the tab content
export const TabContent = ({ tabId, tabTitleContent }: Tab) => {
  const dispatch = useDispatch();
  const { tabsList } = useSelector((state: RootState) => state.browser);

  const handleCloseTab = () => {
    const clonedTabsList = cloneDeep(tabsList);
    const filteredTabs = clonedTabsList.filter((tab) => tab.tabId !== tabId);

    if (filteredTabs.length === 0) {
      window.electron.ipcRenderer.send("quit-app");
    } else {
      dispatch(closeTab(tabId));
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        width: "100%",
        height: "100%",
        bgcolor: "transparent",
      }}
    >
      <Box
        sx={{
          width: 24,
          height: 24,
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            height: 24,
            width: 24,
            borderRadius: "50%",
            "&:hover": { bgcolor: alpha("#fff", 0.1) },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
      <Typography className="text-ellipsis" component={"span"} fontSize={12} fontWeight={500} sx={{ textTransform: "capitalize", paddingRight: '16px', textAlign: 'start' }}>
        {tabTitleContent.titleString}
      </Typography>
    </Box>
  );
};
