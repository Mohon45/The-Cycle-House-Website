import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


export default function ExploreCycle() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secret-brook-42211.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const useStyle = makeStyles({
        image:{
            width: '100%'
        },
        card:{
            height: '450px'
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
        }
    })

    const {image,card, cardFooter, title} = useStyle(); 
    return (
        <Container>
            <Box sx={{ flexGrow: 1, mb: 5 }}>
                <h2 className={title}>Our ByCycles</h2>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 , md: 12 }}>
                    {products.map(product => (
                    <Grid item xs={2} sm={4} md={4} key={product._id}>
                        <Card className={card}>
                            <CardMedia
                            component="img"
                            image={product.img}
                            className={image}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.desc}
                            </Typography>
                            </CardContent>
                            <CardActions className={cardFooter}>
                                <Typography>Price:  ${product.price}</Typography>
                                <Link to={`/booking/${product._id}`}><Button size="small">BY Now</Button></Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};