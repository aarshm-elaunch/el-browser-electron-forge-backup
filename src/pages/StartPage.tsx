import { Box, Container, Typography } from "@mui/material";
import React from "react";
import startPageBg from "../assets/images/start_page_bg.jpeg";

const StartPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url('${startPageBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Container sx={{ py: "5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap:1 }}>
        <Typography sx={{ fontSize: 30, color: "#000", fontWeight: 600 }}>Start Page</Typography>
        <Typography sx={{ fontSize: 16, color: "#000", fontWeight: 500 }}>This is the initial page or new tab content.</Typography>
        <Typography sx={{ fontSize: 16, color: "#000", fontWeight: 500 }}>Features like favourite sites or frequenlty visited pages will be listed here.</Typography>
      </Container>
    </Box>
  );
};

export default StartPage;
