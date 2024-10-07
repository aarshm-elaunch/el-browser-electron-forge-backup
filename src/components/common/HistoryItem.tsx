import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import Image from '../../assets/images/history.jpg'
import { HistoryEntry } from '../../types/data';

interface HistoryItemProps {
    entry: HistoryEntry;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ entry }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', py: '10px', px: '6px', "&:hover": { bgcolor: "#E4E4E4", borderRadius: '8px' } }}>
            <Avatar
                alt="Remy Sharp"
                src={Image}
                sx={{ width: 36, height: 36 }}
            />
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'start', justifyContent: "space-between" }}>
                <Box>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 14, fontWeight: 400 }}>{entry.title}</Typography>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 300 }}>{entry.url}</Typography>
                </Box>
                <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 400 }}>16 : 55 PM</Typography>
            </Box>
        </Box>
    )
}

export default HistoryItem