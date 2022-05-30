import React, { useEffect, useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import "./HomeProducts.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://secret-brook-42211.herokuapp.com/products")
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.slice(0, 6));
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-5">Our ByCycles</h1>

      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {products.map((item, index) => (
            <div class="col" key={index}>
              <Link to={`/booking/${item._id}`} className="link-card">
                <div class="card h-100 single-product hover-effect">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.desc.slice(0, 100)} ...</p>
                    <div className="product-rating">
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
                  <div className="product-desc mb-3">
                    <h5>Price: $ {item.price}</h5>
                    <Link className="by-btn" to={`/booking/${item._id}`}>
                      By Now
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
