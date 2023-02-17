import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MovieCSS from './Movie.module.css'





export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const API_BASE_URL = "https://api.themoviedb.org/3/movie/popular";
    const API_KEY = "?api_key=d87c1b16903e53a32838c47af86924d8"
    const API_URL = `${API_BASE_URL}${API_KEY}`;
    

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        })
      })
  }


  render() {
    return (
      <div className={MovieCSS.containerMovie}>
        {this.state.movies.map((movie) => {
          return (
            <div className={MovieCSS.container} key={movie.id}>
              <img className={MovieCSS.imgposter} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
              <h4 className={MovieCSS.title} >{movie.original_title}</h4>
              <Link className={MovieCSS.link} to ={`/movies/${movie.id}`}>Movie Detail</Link>
            </div>
          );
        })}
      </div>

    )


  }







}
