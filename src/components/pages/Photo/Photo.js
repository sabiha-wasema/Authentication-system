import React from "react";
import "./Photo.css";
import { useNavigate } from "react-router-dom";

const Photo = ({ photo }) => {
  console.log(photo);
  const navigate = useNavigate();
  const {
    ccn3,
    flags,
    capital,
    languages,
    name,
    population,
    region,
    status
  } = photo;
  const showCountryDetail = () => {
    const path = `/photo/${ccn3}`;
    navigate(path);
  };
  return (
    <div className="user-detail-container">
      <img src={flags.png} alt="" />
      <h4>
        <span> Name: </span>
        {name.official}
      </h4>
      <p>
        <span>Capital: </span>
        {capital}
      </p>
      <div className="country-region">
        <p>
          <span>Population:</span>
          {population}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
      </div>
      <button onClick={showCountryDetail}>Details</button>
    </div>
  );
};

export default Photo;
