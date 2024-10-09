import React from 'react'
import { Dialog, DialogTitle } from "@mui/material";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export interface DatePickerModalProps {
    open: boolean;
    selectedValue?: string;
    onClose: (value: string) => void;
}

const DatePickerModal = (props: DatePickerModalProps) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    const handleAccept = (dateRange: any) => {
        console.log('Date range selected:', dateRange);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateRangePicker
                    defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                    onAccept={handleAccept}
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        ".MuiDateRangePickerToolbar-root": {
                            backgroundColor: '#ffffff',
                            color: '#000000',
                        },
                        ".MuiTypography-overline": {
                            display: "none",
                        },
                        [`.${pickersLayoutClasses.contentWrapper}`]: {
                            alignItems: 'center',
                        },
                        ".MuiPickersToolbar-content": {
                            ".MuiDateRangePickerToolbar-container": {
                                ".MuiButtonBase-root": {
                                    ".MuiTypography-root": {
                                        fontSize: '18px',
                                        color: '#000000',
                                    }
                                },
                                ".MuiTypography-h5": {
                                    fontSize: '18px',
                                    color: '#000000',
                                }
                            }
                        },
                        ".MuiDateRangeCalendar-root": {
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            "> div:first-of-type": {
                                display: "none",
                            }
                        },
                        ".MuiPickersDay-root": {
                            color: '#000000',
                            "&.Mui-selected": {
                                backgroundColor: '#1976d2',
                                color: '#ffffff',
                            }
                        }
                    }}
                />
            </LocalizationProvider>
        </Dialog>
    );
}

export default DatePickerModal;