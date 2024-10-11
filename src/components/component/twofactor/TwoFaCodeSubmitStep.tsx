import { Box, Button, CardContent, DialogContentText, FormControl, FormLabel, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "sonner";
import { useEnable2faMutation } from '../../../redux/api/authApi';
import * as Yup from "yup";


const twoFaValidationSchema = Yup.object().shape({
    google_auth_code: Yup.string().required("Google Authenticator Code is required"),
});


const TwoFaCodeSubmitStep = ({ activeStep, step, handleNext, handleGoBack, onClose, resetState }: {
    activeStep: number;
    step: number;
    handleNext?: () => void;
    handleGoBack?: () => void;
    onClose?: () => void;
    resetState?: () => void;
}) => {
    const [enable2faFunc, { isLoading }] = useEnable2faMutation()
    return (
        <Box sx={{ display: activeStep === step ? 'block' : 'none' }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexDirection: "column", textAlign: "center" }}>
                <Box sx={{ width: "100%" }}>
                    <Formik
                        initialValues={{ google_auth_code: "" }}
                        validationSchema={twoFaValidationSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                await enable2faFunc({ code: values.google_auth_code }).unwrap();
                                toast.success("Two Factor Authentication Has Been Enabled");
                                onClose()
                                setTimeout(() => {
                                    resetState()
                                }, 500)
                            } catch (error: any) {
                                toast.error(error.data.message);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        p: "0 !important",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            width: "100%",
                                            mb: 2
                                        }}
                                    >
                                        <FormControl fullWidth>
                                            <FormLabel sx={{ fontSize: "14px", color: (theme) => theme.palette.primary.dark, textAlign: "start", mb: 1 }} htmlFor="user_id">
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
                                                        fontSize: "14px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "30px",
                                                        p: "8px 20px",
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        border: "1px solid #e3e3e3 !important",
                                                    },
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            width: "100%"
                                        }}>
                                        <Button
                                            variant="outlined"
                                            type='button'
                                            onClick={() => handleGoBack()}
                                            sx={{
                                                width: '100%',
                                                flexGrow: "1",
                                                boxShadow: 'none',
                                            }}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            type='submit'
                                            sx={{
                                                width: '100%',
                                                flexGrow: "1",
                                                backgroundColor: '#000',
                                                boxShadow: 'none',
                                                "&.Mui-disabled": {
                                                    opacity: 0.5,
                                                    backgroundColor: '#000',
                                                    color: "#ffffff"
                                                }
                                            }}
                                            disabled={isLoading}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Form>
                        )}
                    </Formik>

                </Box>
            </Box>
        </Box >
    )
}

export default TwoFaCodeSubmitStep