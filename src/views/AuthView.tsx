import React from "react";
import { alpha, Box, Button, Card, CardContent, FormControl, FormLabel, Paper, TextField, Typography, useTheme } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { KeyIcon } from "../components/icons";
import { useLoginMutation } from "../redux/api/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setAuthenticatationFlag, setToken } from "../redux/slices/authSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email  is required"),
  password: Yup.string().required("Password is required"),
});

const AuthView = () => {
  const theme = useTheme();
  const [loginFunc, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch()
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values, "asasas");
            try {
              const response = await loginFunc({ email: values.email, password: values.password }).unwrap();
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
                    <FormLabel sx={{ fontSize: 16, mb: 1, color: "#fff" }} htmlFor="user_id">
                      Employee Id
                    </FormLabel>
                    <Field
                      as={TextField}
                      name="email"
                      placeholder="Enter your employee id"
                      error={!!ErrorMessage}
                      helperText={<ErrorMessage name="userName" />}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <FormLabel sx={{ fontSize: 16, mb: 1, color: "#fff" }} htmlFor="user_passkey">
                      Password
                    </FormLabel>
                    <Field
                      as={TextField}
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      error={!!ErrorMessage}
                      helperText={<ErrorMessage name="password" />}
                    />
                  </FormControl>
                </Box>
                <Button
                  type="submit"
                  disableRipple
                  sx={{ "&:hover": { bgcolor: theme.palette.primary.main } }}
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </CardContent>
            </Form>
          )}
        </Formik>
        <Typography sx={{ fontSize: 14, color: theme.palette.warning.main, p: 2, textAlign: "center" }}>
          {'Enter "test-dev" as employeeId and "1234" as password to enter the browser.'}
        </Typography>
      </Card>
    </Paper>
  );
};

export default AuthView;

