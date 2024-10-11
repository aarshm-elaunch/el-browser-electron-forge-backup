import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
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
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import * as Yup from "yup";
import bgImage from "../assets/images/bg_main.jpg";
import { EyeIcon, EyeOffIcon } from "../components/icons";
import { useLoginMutation, useVerify2faMutation } from "../redux/api/authApi";
import { setAuthenticatationFlag, setToken } from "../redux/slices/authSlice";
import Loader from "../components/common/Loader";

const loginFormvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email  is required"),
  password: Yup.string().required("Password is required"),
});

const twoFaValidationSchema = Yup.object().shape({
  google_auth_code: Yup.string().required("Google Authenticator Code is required"),
});

const AuthView = () => {
  const theme = useTheme();
  const [loginFunc, { isLoading: isLoginLoading }] = useLoginMutation();
  const [verify2faFunc, { isLoading: is2faVaificationLoading }] = useVerify2faMutation();
  const [popupAuthenticatorUI, setPopupAuthenticatorUI] = useState<boolean>(false);
  const [inProcessEmail, setInProcessEmail] = useState<string>("");
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
          display: popupAuthenticatorUI ? "none" : "block",
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
          initialValues={{ email: "", password: "" }}
          validationSchema={loginFormvalidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await loginFunc({ email: values.email, password: values.password }).unwrap();
              if (response.requires2FA) {
                setPopupAuthenticatorUI(true)
                setInProcessEmail(values.email)
              } else {
                toast.success("Login Successful");
                console.log(response, "response");
                dispatch(setAuthenticatationFlag(true));
                dispatch(setToken(response.token));
              }
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
                      Email
                    </FormLabel>
                    <Field
                      as={TextField}
                      name="email"
                      placeholder="Enter your Email"
                      error={!!ErrorMessage}
                      helperText={<ErrorMessage name="email" />}
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
                    "&.Mui-disabled": {
                      opacity: 0.5,
                      background: "#1C1C1E",
                      color: "#fff",
                    }
                  }}
                  variant="contained"
                  disabled={isLoginLoading}
                >
                  {isLoginLoading ? <Loader size={20} /> : "Log In"}
                </Button>
              </CardContent>
            </Form>
          )}
        </Formik>
      </Card>
      <Card
        sx={{
          display: popupAuthenticatorUI ? "block" : "none",
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
          initialValues={{ google_auth_code: "" }}
          validationSchema={twoFaValidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await verify2faFunc({ email: inProcessEmail, code: values.google_auth_code }).unwrap()
              toast.success("Verification Successful");
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
                      Google Authenticator Code
                    </FormLabel>
                    <Field
                      as={TextField}
                      name="google_auth_code"
                      placeholder="Enter your Google Authenticator Code"
                      error={!!ErrorMessage}
                      helperText={<ErrorMessage name="google_auth_code" />}
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
                  disabled={is2faVaificationLoading}
                >
                  {is2faVaificationLoading ? <Loader size={20} /> : "Verify"}
                </Button>
              </CardContent>
            </Form>
          )}
        </Formik>
      </Card>
    </Paper>
  );
};

export default AuthView;
