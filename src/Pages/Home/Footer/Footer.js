import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3 col-sm-12 footer-section-one">
            <h2 className="fw-bold">Our Mobile Apps</h2>

            <div className="play-store-img mt-5">
              <h2>Download the Cycle House</h2>
              <div className="mt-4">
                <img
                  src="https://i.ibb.co/Y7nkJdt/App-Store-footer.png"
                  alt=""
                />
                <img
                  src="https://i.ibb.co/8B9S3C5/Google-Play-footer.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 footer-section-two">
            <img
              src="https://i.ibb.co/xMskTGK/cycle-house-logo-removebg-preview.png"
              alt=""
            />
            <div className="footer-address">
              <p>
                <i className="fas fa-map-marker-alt"></i> 1200 Shaheb Bazar,
                Rajshahi
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> 01782638193
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@cyclehouse.com
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 footer-section-three">
            <h2 className="fw-bold">Quick Link</h2>

            <div className="quick-link-item">
              <a href="/">
                <i className="fas fa-angle-double-right"></i> Home
              </a>
              <a href="/">
                <i className="fas fa-angle-double-right"></i> About Us
              </a>
              <a href="/">
                <i className="fas fa-angle-double-right"></i> Services
              </a>
              <a href="/">
                <i className="fas fa-angle-double-right"></i> Gallery
              </a>
              <a href="/">
                <i className="fas fa-angle-double-right"></i> Blog
              </a>
              <a href="/">
                <i className="fas fa-angle-double-right"></i> FAQ
              </a>
            </div>
          </div>
          <div className="col-md-3 footer-section-four">
            <h2 className="fw-bold">Social Link</h2>

            <div className="social-link-item">
              <a href="/">
                <i className="fab fa-facebook-square fa-3x"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter-square fa-3x"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-intro pb-3 pt-3">
          <p style={{ textAlign: "center" }}>
            &copy;Copyright-2021 Junior Developer. Developed by
            <span> Md.Mohon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
