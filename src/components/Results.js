import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieCSS from "./Movie.module.css";
import queryString from "query-string";

export default function Results() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const params = queryString.parse(location.search);
  const word = params.q;

  useEffect(() => {
    if (!!word && word.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d87c1b16903e53a32838c47af86924d8&query=${word}&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [word]);

  return (
    <div className={MovieCSS.containerMovie}>
      {(movies || []).map((movie) => {
        return (
          <div className={MovieCSS.container} key={movie.id}>
            <img
              className={MovieCSS.imgposter}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
            />
            <h4 className={MovieCSS.title}>{movie.original_title}</h4>
            <Link className={MovieCSS.link} to={`/movies/${movie.id}`}>
              Movie Detail
            </Link>
          </div>
        );
      })}
    </div>
  );
}
