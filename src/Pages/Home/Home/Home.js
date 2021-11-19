import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Homeproducts from '../HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div style={{backgroundColor: '#E8E8E8'}}>
            <Banner></Banner>
            <Homeproducts></Homeproducts>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;