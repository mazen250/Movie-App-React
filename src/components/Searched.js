import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Searched() {
  const [movie, setMovie] = useState([]);
  const [searched, setSearched] = useState("");
  const fetchSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=70372fb18dc8db24a29f85c8a6073805&language=en-US&query=${searched}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      });
  };
  // useEffect(() => {

  // }, []);

  const handleSearch = () => {
    fetchSearch();
  };

  const handlepress = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };
  useEffect(() => {
    fetchSearch();
  }, [searched]);

  return (
    <div className="searchPage">
      <input
        type="text"
        placeholder="Search Movie Here"
        className="srchBtn"
        onChange={(e) => {
          setSearched(e.target.value);
        }}
        onKeyPress={handlepress}
      />
      <button
        style={{
          backgroundColor: "aliceblue",
          borderRadius: "10%",
          marginLeft: "5px",
        }}
        onClick={handleSearch}
        className="search"
      >
        search
      </button>
      <div className="searchlistContainer">
        {movie &&
          movie.map((movie) => {
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

export default Searched;
