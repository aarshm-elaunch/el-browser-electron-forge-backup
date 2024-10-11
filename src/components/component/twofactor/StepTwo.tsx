import { Box, Button, DialogContentText, IconButton, InputBase, Paper, Tooltip } from '@mui/material'
import React from 'react'
import { CopyIcon } from '../../icons/index';

const StepTwo = ({ activeStep, step, handleNext }: {
    activeStep: number;
    step: number;
    handleNext: () => void;
}) => {
    return (
        <Box sx={{ display: activeStep === step ? 'block' : 'none' }}>
            <Box>
                <DialogContentText id="alert-dialog-description">
                    Scan this QR code in the Google Authenticator App
                </DialogContentText>
                <Box component="img" src={'HJVJNVGJVGHHJVVJVMJBVJBJ'} alt="" ></Box>
                <DialogContentText id="alert-dialog-description">
                    If you are unable to scan the QR code, please enter this code manually into the app.
                </DialogContentText>
                <Paper
                    component="form"
                    sx={{ p: '5px 5px', background: '#fff', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", borderRadius: "8px", border: '1px solid #E4E4E4' }}
                >
                    <InputBase
                        disabled
                        sx={{ ml: 1, flex: 1, color: "#000000" }}
                        inputProps={{ 'aria-label': '' }}
                        value={"jhkhjacoiokljefuknkoipddnj"}
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
                            <CopyIcon />
                        </IconButton>
                    </Tooltip>
                </Paper>
            </Box>
            <Box
                sx={{
                    pt: '8px'
                }}>
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
        </Box>
    )
}

export default StepTwo