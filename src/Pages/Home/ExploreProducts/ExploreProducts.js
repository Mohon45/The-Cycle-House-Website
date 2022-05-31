import React, { Fragment, useEffect, useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Shared/Loading/Spinner";
import CompleteSymbol from "../../Shared/Loading/CompleteSymbol";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://secret-brook-42211.herokuapp.com/products")
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data);
            setLoading(true);

            setTimeout(() => {
              setCompleted(true);
            }, 1000);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }, 1000);
  }, []);

  let content;
  content = (
    <div className="container">
      <h1 className="mt-5">Our ByCycles</h1>

      <div className="my-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {products.map((item, index) => (
            <div class="col" key={index}>
              <Link to={`/booking/${item._id}`} className="link-card">
                <div class="card h-100 single-product hover-effect">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.desc} ...</p>
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

  return (
    <Fragment>
      {!completed ? (
        <>{!loading ? <Spinner /> : <CompleteSymbol />}</>
      ) : (
        <>{content}</>
      )}
    </Fragment>
  );
};

export default ExploreProducts;
