
import GoogleLogin from './components/GoogleLogin';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () =>{ 

    return (
      
     <Box> 

       <Routes>
       <Route path='/' exact element={ <GoogleLogin />} /> 
        <Route path="/Feed" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/video/:id" element={<ChannelDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
       </Routes> 
    </Box>

);}



export default App;
