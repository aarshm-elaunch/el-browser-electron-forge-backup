import React from 'react'
import { alpha, Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography, useTheme } from '@mui/material'
import Image from '../../assets/images/bookmark.jpg'
import { MoreVert } from '@mui/icons-material'

const BookmarkCard = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ background: 'rgba(241, 243, 244, 0.3)', backdropFilter: 'blur(46px)', borderRadius: '16px', py: '20px', px: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px', position: 'relative' }}>
            <Avatar
                alt="Remy Sharp"
                src={Image}
                sx={{ width: 40, height: 40 }}
            />
            <Typography className='text-ellipsis' sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 400 }}>Today - Tuesday 1 Oct 2024</Typography>
            <>
                <Tooltip
                    title="More Actions"
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
                        sx={{ background: '#F1F3F466', height: '22px', width: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}
                        id="browser-control-button"
                        aria-controls={open ? "browser-control-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <MoreVert style={{ fontSize: 14, color: '#000' }} />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "browser-control-button",
                    }}
                >
                    <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
                        Edit Shortcut
                    </MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
                        Remove
                    </MenuItem>
                </Menu>
            </>
        </Box>
    )
}

export default BookmarkCard