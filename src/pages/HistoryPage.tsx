import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Search from '../components/common/Search';
import HistoryItem from '../components/common/HistoryItem';
import { useGetAccountHistoryQuery } from '../redux/api/historyApi';
import { HistoryEntry } from '../types/data';
import useScrollToBottom from '../hooks/useScrollToBottom';
import HistorySkelaton from '../components/common/HistorySkelaton';
import { debounce } from 'lodash';

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
    });

    const groupedEntries: { [key: string]: HistoryEntry[] } = allEntries.reduce((acc, entry) => {
        const date = new Date(entry.createdAt).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(entry);
        return acc;
    }, {} as { [key: string]: HistoryEntry[] });

    const handleSearch = useCallback(
        debounce((query: string) => {
            setAllEntries([]);
            setPage(1);
            setSearchQuery(query);
        }, 500), []
    );


    return (
        <Box sx={{ maxWidth: { md: '60%', xs: '85%' }, flexGrow: 1 }} mx={'auto'} py={4}>
            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 28, fontWeight: 600 }}>History</Typography>
            <Search onChange={(e) => handleSearch(e.target.value)} placeholder='Search History Here...' />
            <Box
                ref={containerRef}
                className="hidden-scrollbar"
                sx={{ bgcolor: "#F1F3F4B2", p: '30px', borderRadius: '30px', maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}
            >
                {Object.keys(groupedEntries).map((date) => (
                    <Box
                        key={date}
                        sx={{
                            mb: '30px',
                            '&:last-child': {
                                mb: 0,
                            }
                        }}>
                        <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 18, fontWeight: 500 }}>{date}</Typography>
                        <Divider sx={{ borderColor: '#E4E4E4', my: '8px' }} />
                        {groupedEntries[date].map((entry) => (
                            <HistoryItem key={entry._id} entry={entry} isFetching={true} />
                        ))}
                    </Box>
                ))}
                {isFetching && <HistorySkelaton length={4} />}
            </Box>
        </Box>
    );
};

export default HistoryPage;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Skeleton from '@mui/material/Skeleton';

// interface MediaProps {
//   loading?: boolean;
// }

// function Media(props: MediaProps) {
//   const { loading = false } = props;

//   return (
//     <Card sx={{ maxWidth: 345, m: 2 }}>
//       <CardHeader
//         avatar={
//           loading ? (
//             <Skeleton animation="wave" variant="circular" width={40} height={40} />
//           ) : (
//             <Avatar
//               alt="Ted talk"
//               src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
//             />
//           )
//         }
//         action={
//           loading ? null : (
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           )
//         }
//         title={
//           loading ? (
//             <Skeleton
//               animation="wave"
//               height={10}
//               width="80%"
//               style={{ marginBottom: 6 }}
//             />
//           ) : (
//             'Ted'
//           )
//         }
//         subheader={
//           loading ? (
//             <Skeleton animation="wave" height={10} width="40%" />
//           ) : (
//             '5 hours ago'
//           )
//         }
//       />
//       {loading ? (
//         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
//       ) : (
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
//           alt="Nicola Sturgeon on a TED talk stage"
//         />
//       )}
//       <CardContent>
//         {loading ? (
//           <React.Fragment>
//             <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
//             <Skeleton animation="wave" height={10} width="80%" />
//           </React.Fragment>
//         ) : (
//           <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
//             {
//               "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
//             }
//           </Typography>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default function Facebook() {
//   return (
//     <div>
//       <Media loading />
//     </div>
//   );
// }
