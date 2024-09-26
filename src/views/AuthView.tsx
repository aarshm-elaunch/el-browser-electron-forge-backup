import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Paper,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import { KeyIcon } from "../components/icons";

const AuthView = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        bgcolor: theme.palette.background.paper,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 52,
          width: "100vw",
          overflow: "hidden",
          boxShadow: "0px 0px 1px #00000070",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
        className="titlebar"
      ></Box>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 420,
          border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <KeyIcon width={64} height={64} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "100%",
            }}
          >
            <FormControl fullWidth>
              <FormLabel sx={{ fontSize: 16, mb: 1 }} htmlFor="user_id">
                Employee Id
              </FormLabel>
              <TextField
                sx={{}}
                slotProps={{ input: { sx: { height: 48, fontSize: 14 } } }}
                id="user_id"
                placeholder="Enter your employee id"
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ fontSize: 16, mb: 1 }} htmlFor="user_passkey">
                Password
              </FormLabel>
              <TextField
                slotProps={{ input: { sx: { height: 48, fontSize: 14 } } }}
                id="user_passkey"
                type="password"
                placeholder="Enter your password"
              />
            </FormControl>
          </Box>
          <Button
            disableRipple
            sx={{ "&:hover": { bgcolor: theme.palette.primary.main } }}
            variant="contained"
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default AuthView;
