import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import Navbar from "./Navbar";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&type=video&q=${searchTerm}`)
    .then((data) => {
      console.log(data);
      setVideos(data.items)
    })
  }, [searchTerm]);

  return (
    <Box>
       <Navbar /> 
    <Box p={2} minHeight="95vh">
     
      <Typography variant="h4" fontWeight={900}  color="#3d3232" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
    </Box>
  );
};

export default SearchFeed;