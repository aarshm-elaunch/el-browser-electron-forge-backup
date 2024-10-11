import { Box, Button, DialogContentText, Typography } from '@mui/material';
import GoogleAuth from '../../../assets/images/google-authenticator-logo.png';
import PlayStore from "../../../assets/images/googleplay.svg";
import AppStore from "../../../assets/images/appstore.svg";

const TwoFaDownloadInstructionsStep = ({ activeStep, step, handleNext, handleGoBack, onClose }: {
    activeStep: number;
    step: number;
    handleNext?: () => void;
    handleGoBack?: () => void;
    onClose?: () => void;
}) => {
    return (
        <Box sx={{ display: activeStep === step ? 'block' : 'none', textAlign: 'center' }}>
            <DialogContentText sx={{ fontSize: 14, color: "#000", fontWeight: 500, mb: 2 }} id="alert-dialog-description">
                Download and install the Google Authenticator app
            </DialogContentText>
            <Box component="img" src={GoogleAuth} sx={{ maxWidth: "120px", mb: 2 }} alt="" />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', mb: 2 }}>
                <Typography component={"a"} href=''>
                    <Box component={"img"} sx={{ maxWidth: "150px" }} src={PlayStore}></Box>
                </Typography>
                <Typography component={"a"} href=''>
                    <Box component={"img"} sx={{ maxWidth: "150px" }} src={AppStore}></Box>
                </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <DialogContentText sx={{ fontSize: 14, color: "#000", fontWeight: 500 }} id="alert-dialog-description">
                    Or you can download the Google Authenticator extension for desktop by visiting the Chrome Web Store:
                </DialogContentText>
                <Typography component={"a"} href="https://chrome.google.com/webstore/detail/google-authenticator/nncicadgheobkpnhgghglgogfkbfgjdf" target="_blank" rel="noopener noreferrer" sx={{ fontSize: "14px" }}>
                    Google Authenticator for Desktop
                </Typography>
            </Box>
            <Button
                variant="contained"
                onClick={() => handleNext()}
                sx={{
                    width: '100%',
                    backgroundColor: '#000',
                    boxShadow: 'none',
                }}
            >
                Next
            </Button>
        </Box>
    );
}

export default TwoFaDownloadInstructionsStep;
