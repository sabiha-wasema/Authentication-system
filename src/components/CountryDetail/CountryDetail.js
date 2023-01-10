import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CountryDetail.css'

const CountryDetail = () => {
  const { countryId } = useParams();
  /*  const params = useParams();
  console.log(params) */

  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
    fetch(url).then(res => res.json()).then(data => setPhoto(data[0]));
  }, []);
  return (
    <div className="detail-container">
       <img src={photo.flags?.png} alt="" />
      <div className="detail">
      <h4>
        <span> Name: </span>
        {photo.name?.official}
      </h4>
      <p>
        <span>Capital: </span>
        {photo.capital}
      </p>
      <p><span>Weekend:</span> {photo.startOfWeek }</p>
      </div>
    </div>
  );
};

export default CountryDetail;
