import { Box, Button, CardContent, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, FormLabel, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from 'react';
import { toast } from "sonner";
import * as Yup from "yup";
import { CancleCircleIcon } from "../icons";
import { useDisable2faMutation } from "../../redux/api/authApi";


const twoFaValidationSchema = Yup.object().shape({
    google_auth_code: Yup.string().required("Google Authenticator Code is required"),
});



export interface DatePickerModalProps {
    open: boolean;
    selectedValue?: string;
    onClose: () => void;
}

const DisableTwoFactorAuthModal = (props: DatePickerModalProps) => {
    const { onClose, open } = props;
    const [disable2faFunc, { }] = useDisable2faMutation()
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                sx: {
                    backgroundColor: '#fff',
                    maxWidth: '450px',
                    width: "100%"
                }
            }}
        >
            <DialogTitle id="alert-dialog-title"
                sx={{
                    color: '#000',
                    border: '1px solid #E4E4E4',
                    py: '12px',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                Disable Two-factor authentication
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={onClose}
                >
                    <CancleCircleIcon />
                </Box>
            </DialogTitle>
            <DialogContent sx={{ pt: "20px !important" }}>
                <Box >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexDirection: "column", textAlign: "center" }}>
                        <Box sx={{ width: "100%" }}>
                            <Formik
                                initialValues={{ google_auth_code: "" }}
                                validationSchema={twoFaValidationSchema}
                                onSubmit={async (values, { setSubmitting }) => {
                                    try {
                                        await disable2faFunc({ code: values.google_auth_code }).unwrap();
                                        toast.success("Two Factor Authentication Has Been Disabled");
                                        onClose()
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
                                                    pt: '8px',
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "12px",
                                                    width: "100%"
                                                }}>
                                                <Button
                                                    variant="contained"
                                                    type='submit'
                                                    sx={{
                                                        width: '100%',
                                                        flexGrow: "1",
                                                        backgroundColor: '#000',
                                                        boxShadow: 'none',
                                                    }}
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
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default DisableTwoFactorAuthModal;