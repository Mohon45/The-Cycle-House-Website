import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const card = {
    backgroundColor: '#f2f2f2'
}

const About = () => {
    return (
        <Container>
            
            <Box sx={{ flexGrow: 1, mt: 5 }}>
                <h1>About The Cycle House</h1>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={card} sx={{my: 5}}>
                            <CardContent>
                                <Typography style={{color:'#F7722B'}}>
                                    <i  class="fas fa-bicycle fa-3x"></i>
                                </Typography>
                                <Typography variant="h5" sx={{mb:2}}>
                                    ALL BRANDS
                                </Typography>
                                <Typography>
                                    We have kinds of scales and all brands of biproducts available here.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={card} sx={{my: 5}}>
                            <CardContent>
                                <Typography style={{color:'#F7722B'}}>
                                    <i class="far fa-life-ring fa-3x"></i>
                                </Typography>
                                <Typography variant="h5" sx={{mb:2}}>
                                    FREE SUPPORT
                                </Typography>
                                <Typography>
                                    We have kinds of scales and all brands of biproducts available here.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={card} sx={{my: 5}}>
                            <CardContent>
                                <Typography style={{color:'#F7722B'}}>
                                    <i class="fas fa-user fa-3x"></i>
                                </Typography>
                                <Typography variant="h5" sx={{mb:2}}>
                                    DEALERSHIP
                                </Typography>
                                <Typography>
                                    We have kinds of scales and all brands of biproducts available here.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={card} sx={{my: 5}}>
                            <CardContent>
                                <Typography style={{color:'#F7722B'}}>
                                    <i class="fas fa-bullseye fa-3x"></i>
                                </Typography>
                                <Typography variant="h5" sx={{mb:2}}>
                                    AFFORDABLE
                                </Typography>
                                <Typography>
                                    We have kinds of scales and all brands of biproducts available here.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default About;