import React from 'react'
import { Avatar, Box, Skeleton, Typography } from '@mui/material'
import Image from '../../assets/images/history.jpg'

const HistorySkelaton = ({ length = 2 }:{
    length?:number
}) => {
    return (
        <>
            {
                [...Array(length)].map((_, index) =>
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '14px', py: '10px', px: '6px' }}>
                        <Skeleton variant="circular" width={36} height={36} sx={{ background: "#E4E4E4" }} />
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'start', justifyContent: "space-between" }}>
                            <Box>
                                <Skeleton variant="text" sx={{ fontSize: '1rem', background: "#E4E4E4", width: '250px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1rem', background: "#E4E4E4", width: '150px' }} />
                            </Box>
                            <Skeleton variant="text" sx={{ fontSize: '1rem', background: "#E4E4E4", width: '50px' }} />
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default HistorySkelaton