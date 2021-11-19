import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';
import Rating from 'react-rating';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';


export default function Review() {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://secret-brook-42211.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const useStyle = makeStyles({
        image:{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginLeft: '40%',
            marginTop: '20px'
        },
        card:{
            height: '400px',
            backgroundColor: '#f2f2f2'
        },
        cardFooter:{
            display: 'flex',
            justifyContent: 'space-around'
        },
        title:{
            marginTop: '30px',
            marginBottom: '30px'
        },
        button:{
            backgroundColor: '#F59839',
            borderRadius: '5px'
        },
        ratingView:{
            display: 'flex'

        }
    })

    const {image,card, title} = useStyle()

    
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <h2 className={title}>Client Reviews</h2>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 , md: 12 }}>
                    {reviews.map(review => (
                    <Grid item xs={2} sm={4} md={4} key={review._id}>
                        <Card className={card}>
                            <CardMedia
                            image={review.image}
                            className={image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {review.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {review.description}
                                </Typography>
                                <Typography variant="body2">
                                    <Rating
                                        placeholderRating={review.rating}
                                    ></Rating>
                                </Typography>
                            </CardContent>
                            
                            
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};