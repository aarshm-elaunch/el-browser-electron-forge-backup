import React, { ChangeEvent } from 'react'
import { Box, IconButton, InputBase, Menu, MenuItem, Paper, Tooltip, useTheme } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { SearchIcon } from '../icons';
import { DateRangeOptions } from '../../types/data';

interface SearchProps {
    filter?: boolean;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onDateRangeChange?: (dateRange: DateRangeOptions) => void,
}

const Search = ({ filter = true, placeholder, onChange, onDateRangeChange }: SearchProps) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuSelect = (dateRange: DateRangeOptions) => {
        onDateRangeChange(dateRange)
        handleClose();
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ width: "100%", my: 3 }}>
            <Paper
                component="form"
                sx={{ p: '5px 5px', display: 'flex', alignItems: 'center', width: "100%", bgcolor: "rgba(241, 243, 244, 0.7)", backdropFilter: 'blur(76px)', boxShadow: "none", borderRadius: "48px" }}
            >
                <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }} aria-label="search">
                    <SearchIcon />
                </Box>
                <InputBase
                    onChange={(e) => onChange(e)}
                    sx={{ ml: 1, flex: 1, color: "#000000" }}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': placeholder }}
                />
                {
                    filter &&
                    <>
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
                                sx={{ width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }}
                                id="browser-control-button"
                                aria-controls={open ? "browser-control-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                            >
                                <CalendarMonthOutlinedIcon sx={{ color: "#000" }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                "& .MuiPaper-root": {
                                    top: '260px !important',
                                    backgroundColor: "rgba(255, 255, 255, 1)",
                                    width: "180px",
                                    borderRadius: '26px',
                                    "& .MuiList-root": {
                                        padding: '15px',
                                        "& .MuiMenuItem-root": {
                                            color: '#656565',
                                            fontSize: 16,
                                            fontWeight: 400,
                                            padding: '10px',
                                            borderRadius: '22px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            "& .first_part": {
                                                "& svg": {
                                                    "& path": {
                                                        stroke: '#656565'
                                                    }
                                                }
                                            },
                                            "& .end_part": {
                                                height: '20px',
                                                width: '20px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: '50%',
                                                background: 'transparent',
                                                border: '1px solid rgba(28, 28, 30, 0.3)',
                                                "& svg": {
                                                    "& path": {
                                                        stroke: '#1C1C1E',
                                                        strokeWidth: '1px'
                                                    }
                                                }
                                            },
                                            "&:hover": {
                                                backgroundColor: 'rgba(241, 243, 244, 1)',
                                                color: '#000',
                                                fontWeight: 500,
                                                "& .first_part": {
                                                    "& svg": {
                                                        "& path": {
                                                            stroke: '#000'
                                                        }
                                                    }
                                                },
                                                "& .end_part": {
                                                    background: '#000',
                                                    border: '1px solid #000',
                                                    "& svg": {
                                                        "& path": {
                                                            stroke: '#fff'
                                                        }
                                                    }
                                                },
                                            }
                                        }
                                    }
                                }
                            }}
                        >
                            <MenuItem onClick={() => handleMenuSelect("")}>All</MenuItem>
                            <MenuItem onClick={() => handleMenuSelect("yesterday")}>Yesterday</MenuItem>
                            <MenuItem onClick={() => handleMenuSelect("this_week")}>This Week</MenuItem>
                            <MenuItem onClick={() => handleMenuSelect("last_week")}>Last week</MenuItem>
                            <MenuItem onClick={() => handleMenuSelect("this_month")}>This month</MenuItem>
                            {/* <MenuItem onClick={()=>handleMenuSelect("this_week")}>Custom date</MenuItem> */}
                        </Menu>
                    </>
                }
            </Paper>
        </Box>
    )
}

export default Search