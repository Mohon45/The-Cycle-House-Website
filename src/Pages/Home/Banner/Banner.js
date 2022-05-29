import { Button } from "bootstrap";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-title pt-2">
        <h1>Welcome To</h1>
        <h1 className="mb-5">
          Our <span className="title-sp">Cycle House</span>
        </h1>
        <a href="/" className="banner-btn mt-3">
          Lern More
        </a>
      </div>
    </div>
  );
};

export default Banner;
