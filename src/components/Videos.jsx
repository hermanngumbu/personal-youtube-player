import React from "react";
import { Stack, Box } from "@mui/material";

import ChannelCard from './ChannelCard'
import VideoCard from "./VideoCard";
import Loader from './Loader';

const Videos = ({ videos, direction }) => {
  console.log(videos);

  if(!videos?.length) return <Loader />;

  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id && <VideoCard video={item} /> }
          {/* {item.snippet.channelId && <ChannelCard channelDetail={item.snippet} />} */}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
