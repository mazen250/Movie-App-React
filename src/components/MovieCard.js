import React from "react";
import { Link } from "react-router-dom";
import imdb from "../images/imdb.svg";
function MovieCard({ title, poster_path, vote_average, overview }) {
  const base_img_url = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="MovieCardContainer">
      <img src={base_img_url + poster_path} alt={title} />
      <div className="title">
        <h1>{title}</h1>
        <div className="rating">
          <h3>rating:{vote_average}</h3>
          <img src={imdb} alt="imdb" />
        </div>
      </div>
      <div className="overview">
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
