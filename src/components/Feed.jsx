import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import SearchBar from "./SearchBar";

const Feed = ({user, signOut}) => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if(selectedCategory === "Popular"){
      fetchFromAPI(`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=${process.env.REACT_APP_API_KEY}${selectedCategory}`).then((data) =>{
        setVideos(data.items)
      });
    }
    if(selectedCategory === "My Liked"){
      fetchFromAPI(`videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=${process.env.REACT_APP_API_KEY}${selectedCategory}`).then((data) =>{
        setVideos(data.items)
      });
    }
  
  }, [selectedCategory]);

  return (
<Stack sx={{ backgroundColor: '#000'}}>
<Stack>
       <Navbar />
    </Stack>
   

    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" }, 
          borderRight: "1px solid #3d3d3D",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar user={user} signOut={signOut}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 Herman Ngumbu
        </Typography>

       
      </Box>
      
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
          
        </Typography>

        <Videos videos={videos} />
      </Box>
      
    </Stack>
</Stack>
   
  );
};

export default Feed;
