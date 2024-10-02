import React from 'react'
import { Box, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

interface SearchProps {
    filter?: boolean;
    placeholder: string;
}

const Search = ({ filter = true, placeholder }: SearchProps) => {
    return (
        <Box sx={{ width: "100%", my: 3 }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", bgcolor: "#F1F3F4B2", boxShadow: "none", borderRadius: "48px" }}
            >
                <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }} aria-label="search">
                    <SearchIcon sx={{ color: "#000" }} />
                </Box>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: "#000000" }}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': placeholder }}
                />
                {
                    filter &&
                    <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }} aria-label="search">
                        <CalendarMonthOutlinedIcon sx={{ color: "#000" }} />
                    </Box>
                }
            </Paper>
        </Box>
    )
}

export default Search