import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function TopRev() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=70372fb18dc8db24a29f85c8a6073805&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then((res) => res.json())
      .then((data) => {
        setTopMovies(data.results);
      });

    console.log(setTopMovies);
  }, []);
  return (
    <div className="movieListContainer">
      <h1>Movies with most revenue</h1>
      <div className="listContainer">
        {topMovies &&
          topMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieCard {...movie} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TopRev;
