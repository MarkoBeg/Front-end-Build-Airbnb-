import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "./SearchResult.css";

export default function SearchResult({
  img,
  title,
  description,
  location,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt=""></img>
      <FavoriteBorderIcon className="heart-icon"></FavoriteBorderIcon>
      <div className="searchResult-info">
        <div className="searchResult-infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult-infoBottom">
          <div className="searchResult-star">
            <StarIcon className="star-icon"></StarIcon>
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
