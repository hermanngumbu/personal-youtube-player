import React from "react";
import { Stack, Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;


  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id && item.kind !== "youtube#subscription" && (
            <VideoCard video={item} />
          )}

          {/* display channel */}
          {(item.snippet.channelId && item.kind === 'youtube#subscription') && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
