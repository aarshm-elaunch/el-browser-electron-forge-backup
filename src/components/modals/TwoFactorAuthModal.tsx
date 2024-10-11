import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from 'react';
import TwoFaCodeSubmitStep from "../component/twofactor/TwoFaCodeSubmitStep";
import TwoFaDownloadInstructionsStep from '../component/twofactor/TwoFaDownloadInstructionsStep';
import TwoFaQrCreationStep from '../component/twofactor/TwoFaQrCreationStep';
import { CancleCircleIcon } from "../icons";

export interface DatePickerModalProps {
    open: boolean;
    selectedValue?: string;
    onClose: (value: string) => void;
}

const TwoFactorAuthModal = (props: DatePickerModalProps) => {
    const { onClose, selectedValue, open } = props;
    const [activeStep, setActiveStep] = useState(2);
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleNext = () => {
        setActiveStep((prev: number) => prev + 1);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                sx: {
                    backgroundColor: '#fff',
                    maxWidth: '480px',
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
                Two-factor authentication
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={handleClose}
                >
                    <CancleCircleIcon />
                </Box>
            </DialogTitle>
            <DialogContent sx={{ pt: "20px !important" }}>
                <TwoFaDownloadInstructionsStep activeStep={activeStep} step={1} handleNext={handleNext} />
                <TwoFaQrCreationStep activeStep={activeStep} step={2} handleNext={handleNext} />
                <TwoFaCodeSubmitStep activeStep={activeStep} step={3} />
            </DialogContent>
        </Dialog>
    );
}

export default TwoFactorAuthModal;