import React, { useState, useEffect } from "react";
import Photo from "../Photo/Photo.js";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);
  return (
    <div>
      <h1 className="user-title">
        <span> Total Countries:</span> {photos.length}
      </h1>
      <div className="user-container">
        {/* {photos.map(photo => console.log(photo))} */}
        {photos.map(photo => <Photo key={photo.ccn3} photo={photo} />)}
      </div>
    </div>
  );
};

export default Photos;
