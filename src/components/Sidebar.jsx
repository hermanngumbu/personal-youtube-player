import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';

import { categories } from "../utils/constants";

import LogoutIcon from '@mui/icons-material/Logout'; 
import { pink } from '@mui/material/colors';
const Sidebar = ({ selectedCategory, setSelectedCategory, user ,signOut}) => (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column' },
      }}
    >
        {categories.map((category) => ( 
            <button
              className='category-btn'
              onClick={() => setSelectedCategory(category.name)}
              style={{
                background: category.name === 
                selectedCategory && '#FC1503', 
                color: 'white'
              }}
              key={category.name}
            >
                <span style={{ color: category.name
                === selectedCategory ? 'white' :
                'red', marginRight: '15px'}}>{category.icon}</span>
                <span style={{ opacity: category.name 
                === selectedCategory ? '1' : '0.8'}}
                >{category.name}</span>
            </button>
        ))}
        <Box m={2} pt={3} sx={{ width: '100px' }}>
          <Grid container spacing={0.5}>
          <Grid item xs={6}>
                <item>
                <Avatar alt={user.title}  src={user.profileImg} loading="lazy" />

                </item>
            </Grid>
            <Grid item xs={6}>
                <item>
                <Typography variant='h6' sx={{ color: pink[100] }}
                  align='justify' spacing={3}
                  gutterBottom>{user.name}
           </Typography>
                </item>
            </Grid>
            
          </Grid>
          <LogoutIcon className='category-btn' sx={{ color: pink[100] }}  onClick={signOut} />

        </Box>


    </Stack>
)

export default Sidebar


