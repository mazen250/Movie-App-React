import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleMovie() {
  let { title } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=70372fb18dc8db24a29f85c8a6073805&language=en-US&query=${title}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      });

    console.log(movie);
  }, []);

  return <div>movie:{title}</div>;
}

export default SingleMovie;
