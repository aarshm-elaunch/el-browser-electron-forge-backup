import React, { useState, useRef, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Search from '../components/common/Search';
import HistoryItem from '../components/common/HistoryItem';
import { useGetAccountHistoryQuery } from '../redux/api/historyApi';
import { HistoryEntry } from '../types/data';
import useScrollToBottom from '../hooks/useScrollToBottom';

const HistoryPage: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const limit = 10;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [allEntries, setAllEntries] = useState<HistoryEntry[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const { data, isFetching } = useGetAccountHistoryQuery({ page, limit, search: searchQuery });

    useEffect(() => {
        if (data && data.data) {
            setAllEntries((prev) => [...prev, ...data.data]);
        }
    }, [data]);

    useScrollToBottom(containerRef, () => {
        if (!isFetching && data?.totalCount > allEntries.length) {
            setPage((prev) => prev + 1);
        }
    }, { threshold: 10 });

    const groupedEntries: { [key: string]: HistoryEntry[] } = allEntries.reduce((acc, entry) => {
        const date = new Date(entry.createdAt).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(entry);
        return acc;
    }, {} as { [key: string]: HistoryEntry[] });

    return (
        <Box sx={{ maxWidth: { md: '60%', xs: '85%' }, flexGrow: 1 }} mx={'auto'} py={4}>
            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 28, fontWeight: 600 }}>History</Typography>
            <Search onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search History Here...' />
            <Box
                ref={containerRef}
                sx={{ bgcolor: "#F1F3F4B2", p: '30px', borderRadius: '30px', maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}
            >
                {Object.keys(groupedEntries).map((date) => (
                    <Box key={date} sx={{ mb: '30px' }}>
                        <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 18, fontWeight: 500 }}>{date}</Typography>
                        <Divider sx={{ borderColor: '#E4E4E4', my: '8px' }} />
                        {groupedEntries[date].map((entry) => (
                            <HistoryItem key={entry._id} entry={entry} />
                        ))}
                    </Box>
                ))}
                {isFetching && <Typography>Loading...</Typography>}
            </Box>
        </Box>
    );
};

export default HistoryPage;
