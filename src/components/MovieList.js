import React, { useEffect, useState } from "react";
import MostVoted from "./MostVoted";
import searchicon from "../images/search.png";
import PopMovies from "./PopMovies";
import TopRev from "./TopRev";
import { Link } from "react-router-dom";

function MoiveList() {
  return (
    <div className="movieListContainer">
      <Link to={`/movie/search`}>
        <button
          style={{
            backgroundColor: "aliceblue",

            marginLeft: "5px",
          }}
          className="mainSearch"
        >
          search
        </button>
      </Link>
      <PopMovies />
      <TopRev />
      <MostVoted />
    </div>
  );
}

export default MoiveList;
