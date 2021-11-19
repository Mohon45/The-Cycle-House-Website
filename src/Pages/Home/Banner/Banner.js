import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button} from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(https://templates.envytheme.com/herobike/default/assets/img/home-bg-1.jpg)`

}

const verticalCenter = {
    height: 600
}
const title ={
    fontWeight: 'bold',
    color: '#113CFC'
}
const titleBg = {
    backgroundColor: 'rgba(212, 241, 246, 0.41)'
    
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid spacing={2}>
                <Typography item style={{ ...verticalCenter, textAlign: 'center'}}  xs={12} md={12}>
                    <Box style={titleBg}>
                        <Typography variant="h1" sx={{color: 'black', fontWeight: '400'}}>
                            Welcome To <br />
                            Our <span style={title}>Cycle House</span>
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', color: 'black' }}>Lern More</Button>
                    </Box>
                </Typography>

            </Grid>
        </Box>
    );
};

export default Banner;