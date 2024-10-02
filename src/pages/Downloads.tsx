import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Search from '../components/common/Search';
import HistoryItem from '../components/common/HistoryItem';
import DownloadItem from '../components/common/DownloadItem';

const Downloads = () => {
    return (
        <Box sx={{ maxWidth: { md: '60%', xs: '85%' }, flexGrow: 1 }} mx={'auto'} py={4}>
            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 28, fontWeight: 600 }}>Downloads</Typography>
            <Search placeholder='Search Download Here...' filter={false} />
            <Box className="hidden-scrollbar" sx={{ bgcolor: "#F1F3F4B2", p: '30px', borderRadius: '30px', maxHeight: 'calc(100vh - 235px)', overflow: 'auto' }}>
                <Box sx={{ mb: '30px' }}>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 18, fontWeight: 500 }}>Today - Tuesday 1 Oct 2024</Typography>
                    <Divider sx={{ borderColor: '#E4E4E4', my: '8px' }} />
                    {
                        Array.from({ length: 5 }).map(() =>
                            <DownloadItem />
                        )
                    }
                </Box>
                <Box>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 18, fontWeight: 500 }}>Yesterday - Monday 30 Sept 2024</Typography>
                    <Divider sx={{ borderColor: '#E4E4E4', my: '8px' }} />
                    {
                        Array.from({ length: 10 }).map(() =>
                            <DownloadItem />
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Downloads