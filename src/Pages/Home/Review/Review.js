import React, { useEffect, useState } from "react";
import "./Review.css";
import { DynamicStar } from "react-dynamic-star";
import Carousel from "react-elastic-carousel";
import axios from "axios";
const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://cycle-house.onrender.com/api/v1/cycle-house/reviews")
      .then((res) => {
        if (res.status === 200) {
          setReviews(res.data.reviews);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="container">
      <h1>Client Review</h1>

      <div className="mt-5">
        <Carousel breakPoints={breakPoints}>
          {reviews?.map((item, index) => (
            <div className="card single-review-card" key={index}>
              <div className="card-body">
                <img src={item.image} alt="" />
                <h5 className="mt-3">{item.name}</h5>
                <p>{item.description}</p>
                <div className="dynamic-rating">
                  <DynamicStar
                    rating={item.rating}
                    width={30}
                    height={30}
                    outlined={"" ? "" : true}
                    totalStars={5}
                    sharpnessStar={2}
                    fullStarColor={"#FFBC00"}
                    emptyStarColor={"transparent"}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* single card */}
      </div>
    </div>
  );
};

export default Review;
