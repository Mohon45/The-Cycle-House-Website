import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container py-5">
      <h1>About The Cycle House</h1>

      <div className="about-item d-flex justify-content-between mt-5">
        <div>
          <div className="card single-card">
            <div className="card-body">
              <i className="fas fa-bicycle fa-3x icon-color mb-2"></i>
              <h5>ALL BRANDS</h5>
              <p className="mt-4">
                We have kinds of scales and all brands of biproducts available
                here.
              </p>
            </div>
            <div className="footer-cust">
              <a href="/">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card single-card">
            <div className="card-body">
              <i className="far fa-life-ring fa-3x icon-color mb-2"></i>
              <h5>FREE SUPPORT</h5>
              <p className="mt-4">
                We have kinds of scales and all brands of biproducts available
                here.
              </p>
            </div>
            <div className="footer-cust">
              <a href="/">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card single-card">
            <div className="card-body">
              <i className="fas fa-user fa-3x icon-color mb-2"></i>
              <h5>DEALERSHIP</h5>
              <p className="mt-4">
                We have kinds of scales and all brands of biproducts available
                here.
              </p>
            </div>
            <div className="footer-cust">
              <a href="/">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card single-card">
            <div className="card-body">
              <i className="fas fa-bullseye fa-3x icon-color mb-2"></i>
              <h5>AFFORDABLE</h5>
              <p className="mt-4">
                We have kinds of scales and all brands of biproducts available
                here.
              </p>
            </div>
            <div className="footer-cust">
              <a href="/">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
