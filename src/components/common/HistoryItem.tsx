import React from 'react'
import { Avatar, Box, Link, Skeleton, Typography } from '@mui/material'
import Image from '../../assets/images/history.jpg'
import { HistoryEntry } from '../../types/data';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useBrowser from '../../hooks/useBrowser';
import { useDispatch } from 'react-redux';
import { updateTabState } from '../../redux/slices/browserSlice';

interface HistoryItemProps {
    entry: HistoryEntry;
    isFetching: boolean;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ entry, isFetching }) => {
    const dispatch = useDispatch()
    const { webviewRef } = useBrowser();
    const { tabsList, activeTabId } = useSelector((state: RootState) => state.browser);

    const activeTab = tabsList.find((tab) => tab.tabId === activeTabId);

    const updateNavigationState = (url: string) => {
        dispatch(
            updateTabState({
                tabId: activeTab.tabId,
                canGoBack: webviewRef.current?.canGoBack() || false,
                canGoForward: webviewRef.current?.canGoForward() || false,
                scrollPos: activeTab.scrollPosition,
                tabURL: url,
            })
        );
    };
    return (
        <Box onClick={() => updateNavigationState(entry.url)} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px', py: '10px', px: '6px', "&:hover": { bgcolor: "#E4E4E4", borderRadius: '8px' }, overflow: 'hidden', cursor: 'pointer' }}>
            <Avatar
                alt="Remy Sharp"
                src={Image}
                sx={{ width: 36, height: 36 }}
            />
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'start', justifyContent: "space-between", gap: '20px', overflow: 'hidden' }}>
                <Box sx={{ overflow: 'hidden' }}>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 14, fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{entry.title}</Typography>
                    <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{decodeURIComponent(entry.url)}</Typography>
                </Box>
                <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 12, fontWeight: 400, flexShrink: '0' }}>{moment(entry.createdAt).format('hh.mm A')}</Typography>
            </Box>
        </Box>
    )
}

export default HistoryItem