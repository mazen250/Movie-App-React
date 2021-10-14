import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function PopMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=70372fb18dc8db24a29f85c8a6073805&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      });

    console.log(popularMovies);
  }, []);
  return (
    <div className="movieListContainer">
      <h1>trending now movie list</h1>
      <div className="listContainer">
        {popularMovies &&
          popularMovies.map((popmovie) => {
            return (
              <div key={popmovie.id}>
                <MovieCard {...popmovie} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PopMovies;
