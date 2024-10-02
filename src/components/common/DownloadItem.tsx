import React from 'react'
import { Avatar, Box, Tooltip, Typography } from '@mui/material'
import Image from '../../assets/images/history.jpg'
import { CancleCircleIcon, FolderIcon, LinkIcon } from '../icons'

const DownloadItem = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', py: '10px', px: '6px', "&:hover": { bgcolor: "#E4E4E4", borderRadius: '8px' } }}>
            <Avatar
                alt="Remy Sharp"
                src={Image}
                sx={{ width: 36, height: 36 }}
            />
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Box>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 14, fontWeight: 400 }}>Free Images From Unspalsh</Typography>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 300 }}>Unsplash.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Tooltip title="Copy Download Link">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', height: '30px', width: '30px', p: '4px', "&:hover": { bgcolor: "#F1F3F4B2", borderRadius: '50%' } }}>
                            <LinkIcon />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Show in Folder">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', height: '30px', width: '30px', p: '4px', "&:hover": { bgcolor: "#F1F3F4B2", borderRadius: '50%' } }}>
                            <FolderIcon />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Delete From History">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', height: '30px', width: '30px', p: '4px', "&:hover": { bgcolor: "#F1F3F4B2", borderRadius: '50%' } }}>
                            <CancleCircleIcon />
                        </Box>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default DownloadItem