import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Homeproducts from "../HomeProducts/HomeProducts";
import Review from "../Review/Review";
import TechnicalSupport from "../TechnicalSupport/TechnicalSupport";
import Spinner from "../../Shared/Loading/Spinner";
import CompleteSymbol from "../../Shared/Loading/CompleteSymbol";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://cycle-house.onrender.com/api/v1/cycle-house/products")
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            // setCompleted(true);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ backgroundColor: "#E8E8E8" }}>
          <Banner></Banner>
          <Homeproducts />
          <TechnicalSupport></TechnicalSupport>
          <Review></Review>
          <About></About>
        </div>
      )}
    </div>
  );
};

export default Home;
