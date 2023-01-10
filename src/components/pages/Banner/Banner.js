import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-description-container">
        <h2 className="banner-title">Hello There!</h2>
        <p className="banner-description">
          Automatic <span className="mark-up">identity verification</span> which
          enable you to <br /> verify your identity
        </p>
        <img className="banner-img" src={bannerImg} alt="" />
        <div>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <br />

          <Link to="/signup">
            <button className="signup-btn">Sign Up </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
