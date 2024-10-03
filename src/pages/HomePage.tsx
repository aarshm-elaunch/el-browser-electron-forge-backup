/* eslint-disable import/no-unresolved */
import { Box, Container, Grid2, Typography } from "@mui/material";
import startPageBg from "../assets/images/bg_main.jpg";
import BookmarkCard from "../components/common/BookmarkCard";
import Search from "../components/common/Search";
import { PluseCircleIcon } from "../components/icons";

const HomePage = () => {
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
      <Container
        sx={{
          py: "5rem",
          pt: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "100%",
          gap: 1,
        }}
      >
        <Box sx={{ maxWidth: { md: "70%", xs: "85%" }, width: "100%" }}>
          <Search placeholder="Search Here..." filter={false} />
          <Box sx={{ width: "100%" }}>
            <Grid2 container spacing={3}>
              {Array.from({ length: 7 }).map(() => (
                <Grid2 size={3}>
                  <BookmarkCard />
                </Grid2>
              ))}
              <Grid2 size={3}>
                <Box
                  sx={{
                    background: "#F1F3F44D",
                    backdropFilter: "blur(46px)",
                    borderRadius: "16px",
                    py: "20px",
                    px: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <PluseCircleIcon />
                  </Box>
                  <Typography className="text-ellipsis" sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 400 }}>
                    Add Shortcut
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
