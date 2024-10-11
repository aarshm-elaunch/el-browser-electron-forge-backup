import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputBase, List, ListItem, ListItemButton, Paper, Tooltip } from "@mui/material";
import { SearchIcon } from '../icons';
import StepOne from '../component/twofactor/StepOne';
import StepTwo from '../component/twofactor/StepTwo';
import StepThree from '../component/twofactor/StepThree';

export interface DatePickerModalProps {
    open: boolean;
    selectedValue?: string;
    onClose: (value: string) => void;
}

const TwoFactorAuthModal = (props: DatePickerModalProps) => {
    const { onClose, selectedValue, open } = props;
    const [activeStep, setActiveStep] = useState(1);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    const handleAccept = (dateRange: any) => {
        console.log('Date range selected:', dateRange);
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
            // sx={{
            //     '.MuiPaper-root': {
            //         background: '#fff',
            //     }
            // }}
            PaperProps={{
                sx: {
                    backgroundColor: '#fff',
                    minWidth: '600px',
                    maxWidth: '600px',
                }
            }}
        >
            <DialogTitle id="alert-dialog-title"
                sx={{
                    color: '#000'
                }}
            >
                Enable 2FA
            </DialogTitle>
            <DialogContent>
                <StepOne activeStep={activeStep} step={1} handleNext={handleNext} />
                <StepTwo activeStep={activeStep} step={2} handleNext={handleNext} />
                <StepThree activeStep={activeStep} step={3} />
                {/* <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', color: '#000' }}>
                        You will need an authenticator mobile app to complete this process, such as one of the following:
                        <List
                            sx={{
                                '&.MuiList-root': {
                                    p: '0',
                                    '& .MuiListItemButton-root': {
                                        padding: '4px 0',
                                        color: '#22b142'
                                    }
                                }
                            }}
                        >
                            <ListItemButton component="a" href="#simple-list">
                                Google Authenticator
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                Microsoft Authenticator
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                Duo Mobile
                            </ListItemButton>
                        </List>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', color: '#000' }}>
                        Scan the QR code with your Authenticator
                        <DialogContentText id="alert-dialog-description">
                            If you can't scan the code, you can enter this secret key into your authentication app:
                            <Paper
                                component="form"
                                sx={{ p: '5px 5px', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", borderRadius: "8px", border: '1px solid #E4E4E4' }}
                            >
                                <InputBase
                                    disabled
                                    sx={{ ml: 1, flex: 1, color: "#000000" }}
                                    inputProps={{ 'aria-label': '' }}
                                    value={"jhkhjacoiokljefuknkoipddnj"}
                                />
                                <Tooltip
                                    title="Customise and control browser"
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
                                        kj
                                    </IconButton>
                                </Tooltip>
                            </Paper>
                        </DialogContentText>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', color: '#000' }}>
                        After scanning the QR code above, enter the six-digit code generated by your authenticator
                    </ListItem>
                </List> */}
            </DialogContent>
        </Dialog>
    );
}

export default TwoFactorAuthModal;