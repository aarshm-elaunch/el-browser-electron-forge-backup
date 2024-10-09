import { Box, Divider, Typography, CircularProgress } from '@mui/material';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Search from '../components/common/Search';
import useScrollToBottom from '../hooks/useScrollToBottom';
import { useGetAccountHistoryQuery } from '../redux/api/historyApi';
import { DateRange, DateRangeOptions, HistoryEntriesByDate } from '../types/data';
import HistoryItem from '../components/common/HistoryItem';
import { formatDate } from '../utils/index';
import HistorySkelaton from '../components/common/HistorySkelaton';
import moment from 'moment';

const HistoryPage: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const limit = 25;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [allEntries, setAllEntries] = useState<HistoryEntriesByDate[]>([]);
    const [dateRange, setDateRange] = useState<DateRangeOptions>("")
    const [customDateRange, setCustomDateRange] = useState<{ start: string, end: string }>({ start: "", end: "" })
    const containerRef = useRef<HTMLDivElement>(null);
    const hasMoreDataRef = useRef<boolean>(true);
    const { data, isFetching } = useGetAccountHistoryQuery({ page, limit, search: searchQuery, dateRange, start: customDateRange.start, end: customDateRange.end });

    useEffect(() => {
        if (data && data.data) {
            setAllEntries((prev) => {
                const updatedEntries = new Map<string, HistoryEntriesByDate>();
                prev.forEach(entry => {
                    updatedEntries.set(entry.date, entry);
                });
                data.data.forEach(newEntry => {
                    if (updatedEntries.has(newEntry.date)) {
                        const existingEntry = updatedEntries.get(newEntry.date)!;
                        updatedEntries.set(newEntry.date, {
                            ...existingEntry,
                            entries: [
                                ...existingEntry.entries,
                                ...newEntry.entries
                            ]
                        });
                    } else {
                        updatedEntries.set(newEntry.date, newEntry);
                    }
                });
                return Array.from(updatedEntries.values());
            });
            hasMoreDataRef.current = data.hasMoreData
        }
    }, [data]);

    useScrollToBottom(containerRef, () => {
        if (!isFetching && hasMoreDataRef.current) {
            setPage((prev) => prev + 1);
        }
    });

    const handleSearch = useCallback(
        debounce((query: string) => {
            setAllEntries([])
            setPage(1)
            setSearchQuery(query);
        }, 500), []
    );

    const handleSelectDateRange = (dateRange: DateRangeOptions) => {
        setAllEntries([])
        setPage(1)
        setDateRange(dateRange)

    }

    const handleCustomDateRangeChange = (dateRange: DateRange) => {
        setAllEntries([]);
        setPage(1);
        setDateRange("custom");
        const startDate = moment(dateRange.start).startOf('day').toISOString();
        const endDate = moment(dateRange.end).endOf('day').toISOString();
        console.log({
            start: dateRange.start,
            end: dateRange.end,
            formattedStart: startDate,
            formattedEnd: endDate
        });

        setCustomDateRange({
            start: startDate,
            end: endDate
        });
    };

    return (
        <Box sx={{ maxWidth: { md: '60%', xs: '85%' }, flexGrow: 1 }} mx={'auto'} py={4}>
            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 28, fontWeight: 600 }}>History</Typography>
            <Search onCustomDateRangeChange={handleCustomDateRangeChange} onDateRangeChange={(dateRange: DateRangeOptions) => handleSelectDateRange(dateRange)} onChange={(e) => handleSearch(e.target.value)} placeholder='Search History Here...' />
            <Box
                ref={containerRef}
                className="hidden-scrollbar"
                sx={{ bgcolor: "#F1F3F4B2", p: '30px', borderRadius: '30px', maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}
            >
                {!isFetching && allEntries.length === 0 ? (
                    <Typography sx={{ textAlign: 'center', color: 'grey.600', fontSize: 18 }}>No data found</Typography>
                ) : (
                    allEntries.map((historyDateBasedEntries: HistoryEntriesByDate, index: number) => (
                        <Box
                            key={index}
                            sx={{
                                mb: '30px',
                                '&:last-child': {
                                    mb: 0,
                                }
                            }}>
                            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 18, fontWeight: 500 }}>
                                {formatDate(historyDateBasedEntries.date)}
                            </Typography>
                            <Divider sx={{ borderColor: '#E4E4E4', my: '8px' }} />
                            {historyDateBasedEntries.entries.map((entry) => (
                                <HistoryItem key={entry._id} entry={entry} isFetching={true} />
                            ))}
                        </Box>
                    ))
                )}
                {isFetching && (
                    <HistorySkelaton length={4} />
                )}
            </Box>
        </Box>
    );
};

export default HistoryPage;
