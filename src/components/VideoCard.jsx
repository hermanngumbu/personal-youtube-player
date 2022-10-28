import React, { useEffect } from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id, snippet } }) => {
  useEffect(()=>{
  },[id])

  return(
   <>
     <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={(id != null && typeof id === 'object' )? `/video/${id.videoId}` : `/video/${id}` }>
      <CardMedia image={snippet?.thumbnails?.high?.url } alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={(id != null && typeof id === 'object' ) ? `/video/${id.videoId}` : `/video/${id}`} >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      {/* <Link to={snippet?.channelId } >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link> */}
    </CardContent>
  </Card>
   </>
  )
};

export default VideoCard