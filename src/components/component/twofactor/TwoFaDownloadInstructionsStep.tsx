import React from 'react'
import { Box, Button, DialogContentText, List, ListItemButton } from '@mui/material';
import GoogleAuth from '../../../assets/images/google-authenticator-logo.png';
import PlayStore from '../../../assets/images/play-black.png';
import AppStore from '../../../assets/images/appstore-black.png';

const TwoFaDownloadInstructionsStep = ({ activeStep, step, handleNext }: {
    activeStep: number;
    step: number;
    handleNext: () => void;
}) => {
    return (
        <Box sx={{ display: activeStep === step ? 'block' : 'none', textAlign: 'center' }}>
            <Box component="img" src={GoogleAuth} alt="" ></Box>
            <DialogContentText id="alert-dialog-description" sx={{ py: '8px' }}>
                Download and install the Google Authenticator app
            </DialogContentText>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', }}>
                <Box component="img" src={PlayStore} alt="" ></Box>
                <Box component="img" src={AppStore} alt="" ></Box>
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
    )
}

export default TwoFaDownloadInstructionsStep