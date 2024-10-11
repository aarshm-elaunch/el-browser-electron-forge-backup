import { Box, Button, DialogContentText, IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import { useGenerate2faSecretQuery } from '../../../redux/api/authApi';
import { QRCodeSVG } from 'qrcode.react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Loader from '../../../components/common/Loader';
const TwoFaQrCreationStep = ({ activeStep, step, handleNext, handleGoBack, onClose }: {
    activeStep: number;
    step: number;
    handleNext?: () => void;
    handleGoBack?: () => void;
    onClose?: () => void;
}) => {
    const { data, isFetching } = useGenerate2faSecretQuery(undefined, { skip: activeStep !== step });
    return (
        <Box sx={{ display: activeStep === step ? 'block' : 'none' }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexDirection: "column", textAlign: "center", mb: 2 }}>
                {
                    isFetching ? <Box sx={{ width: "100%", height: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}><Loader /></Box> : (
                        <>
                            <DialogContentText sx={{ fontSize: 14, color: "#000", fontWeight: 500 }} id="alert-dialog-description">
                                Scan this QR code in the Google Authenticator App
                            </DialogContentText>
                            <Box sx={{ width: "140px", height: "140px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", border: "1px solid #e3e3e3" }}>
                                <QRCodeSVG value={data?.otpauth} size={120} radius={12} />
                            </Box>
                            <DialogContentText sx={{ fontSize: "14px", color: (theme) => theme.palette.primary.dark }} id="alert-dialog-description">
                                If you are unable to scan the QR code, please enter this code manually into the app.
                            </DialogContentText>
                            <Paper
                                component="form"
                                sx={{ p: '5px 5px', background: '#fff', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", borderRadius: "8px", border: '1px solid #E4E4E4' }}
                            >
                                <InputBase
                                    disabled
                                    sx={{ ml: 1, flex: 1, fontSize: "14px", color: (theme) => theme.palette.primary.dark }}
                                    inputProps={{ 'aria-label': '' }}
                                    value={data?.secret}
                                />
                                <Tooltip
                                    title="Copy"
                                    enterDelay={1000}
                                    PopperProps={{
                                        sx: {
                                            "& .MuiTooltip-tooltip": {
                                                borderRadius: "2px !important",
                                                marginTop: "4px !important",
                                            },
                                        },
                                    }}
                                >
                                    <IconButton
                                        disableRipple
                                        sx={{ py: '0', borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }}
                                        id="browser-control-button"
                                        aria-controls={open ? "browser-control-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? "true" : undefined}
                                    >
                                        <ContentCopyIcon sx={{ width: "20px", height: "20px" }} />
                                    </IconButton>
                                </Tooltip>
                            </Paper>
                        </>
                    )
                }
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                }}>
                <Button
                    variant="outlined"
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
                    onClick={() => handleNext()}
                    sx={{
                        width: '100%',
                        flexGrow: "1",
                        backgroundColor: '#000',
                        boxShadow: 'none',
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    )
}

export default TwoFaQrCreationStep