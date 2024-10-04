import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { EyeIcon, EyeOffIcon } from "../components/icons";
import { useLoginMutation } from "../redux/api/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setAuthenticatationFlag, setToken } from "../redux/slices/authSlice";
import bgImage from "../assets/images/bg_main.jpg";
import { RadioButtonUnchecked, CheckCircle } from "@mui/icons-material";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Email  is required"),
  password: Yup.string().required("Password is required"),
});

const AuthView = () => {
  const theme = useTheme();
  const [loginFunc, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Paper
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px",
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
        className="window-drag"
      ></Box>
      <Card
        sx={{
          background: "rgba(241, 243, 244, 0.6)",
          backdropFilter: "blur(10px)",
          width: "100%",
          maxWidth: { xl: "30%", lg: "40%", md: "50%", xs: "75%" },
          boxShadow: "none",
          p: { lg: "60px", xs: "36px" },
          borderRadius: { lg: "60px", xs: "40px" },
        }}
      >
        <Typography sx={{ color: "#000", fontSize: 32, fontWeight: 600 }}>Welcome Back</Typography>
        <Typography sx={{ color: "#656565", fontSize: 14, fontWeight: 400 }}>Welcome to Custom Browser - Let's log in account</Typography>
        <Formik
          initialValues={{ userName: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values, "asasas");
            try {
              const response = await loginFunc({ email: values.userName, password: values.password }).unwrap();
              toast.success("Login Successful");
              console.log(response, "response");
              dispatch(setAuthenticatationFlag(true));
              dispatch(setToken(response.token));
            } catch (error: any) {
              toast.error(error.data.message);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  p: "0 !important",
                  pt: "40px !important",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "100%",
                  }}
                >
                  <FormControl fullWidth>
                    <FormLabel sx={{ fontSize: 14, mb: "8px", color: "#000", fontWeight: 500 }} htmlFor="user_id">
                      Username
                    </FormLabel>
                    <Field
                      as={TextField}
                      name="userName"
                      placeholder="Enter your Username"
                      error={!!ErrorMessage}
                      helperText={<ErrorMessage name="userName" />}
                      sx={{
                        color: "#000",
                        "& .MuiInputBase-input": {
                          color: "#000",
                          backgroundColor: "#fff",
                          borderRadius: "30px",
                          p: "14px 20px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <FormLabel sx={{ fontSize: 14, mb: "8px", color: "#000", fontWeight: 500 }} htmlFor="user_passkey">
                      Password
                    </FormLabel>
                    <Field
                      as={TextField}
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                      placeholder="Enter your password"
                      error={!!ErrorMessage}
                      helperText={<ErrorMessage name="password" />}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sx={{ m: 0 }}>
                            <IconButton onClick={handleTogglePasswordVisibility} edge="end" sx={{ py: 0 }}>
                              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        color: "#000",
                        "& .MuiInputBase-root": {
                          color: "#000",
                          backgroundColor: "#fff",
                          borderRadius: "30px",
                          padding: "14px 20px",
                        },
                        "& .MuiInputBase-input": {
                          padding: "0px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                        sx={{
                          p: 0,
                          "& .MuiSvgIcon-root": {
                            fontSize: 20,
                          },
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#000",
                          },
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      />
                    }
                    label="Remember Me"
                    sx={{
                      color: "#000",
                      fontSize: 12,
                      fontWeight: 500,
                      padding: "0",
                      marginLeft: "-3px",
                      display: "inline-flex",
                      width: "fit-content",
                      "& .MuiFormControlLabel-label": {
                        color: "#000",
                        fontSize: 12,
                        fontWeight: 500,
                        paddingLeft: "8px",
                      },
                    }}
                  />
                </Box>
                <Button
                  type="submit"
                  disableRipple
                  fullWidth
                  sx={{
                    background: "#1C1C1E",
                    color: "#fff",
                    borderRadius: "30px",
                    py: "15px",
                    fontSize: 18,
                    fontWeight: 500,
                    textTransform: "capitalize",
                    lineHeight: "normal",
                  }}
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Log In
                </Button>
              </CardContent>
            </Form>
          )}
        </Formik>
        {/* <Typography sx={{ fontSize: 14, color: theme.palette.warning.main, p: 2, textAlign: "center" }}>
          {'Enter "test-dev" as employeeId and "1234" as password to enter the browser.'}
        </Typography> */}
      </Card>
    </Paper>
  );
};

export default AuthView;
