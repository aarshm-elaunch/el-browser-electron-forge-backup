import { Box, Button, DialogContentText, IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import React from 'react'
import { CopyIcon } from '../../icons/index';

const StepThree = ({ activeStep, step }: {
    activeStep: number;
    step: number;
}) => {
    return (
        <Box sx={{ display: activeStep === step ? 'block' : 'none' }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexDirection: "column", textAlign: "center" }}>
                <DialogContentText sx={{ fontSize: "14px", color: (theme) => theme.palette.primary.dark }} id="alert-dialog-description">
                    Enabled Google Authenticator
                </DialogContentText>
                <Paper
                    component="form"
                    sx={{ p: '5px 5px', mb: '8px', background: '#fff', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", borderRadius: "8px", border: '1px solid #E4E4E4' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: "#000000" }}
                        inputProps={{ 'aria-label': '' }}
                    />
                </Paper>
                <Paper
                    component="form"
                    sx={{ p: '5px 5px', background: '#fff', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", borderRadius: "8px", border: '1px solid #E4E4E4' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: "#000000" }}
                        inputProps={{ 'aria-label': '' }}
                    />
                </Paper>
            </Box>
            <Box
                sx={{
                    pt: '8px'
                }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '100%',
                        backgroundColor: '#000',
                        boxShadow: 'none',
                    }}
                >
                    Done
                </Button>
            </Box>
        </Box>
    )
}

export default StepThree