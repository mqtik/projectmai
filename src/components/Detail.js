import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DetailCSS from './Detail.module.css';




export default class Detail extends Component {

    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            movieData: {},

        };
    }

    componentDidMount() {
        const API_BASE_URL = "https://api.themoviedb.org/3/movie/";
        const API_KEY = "?api_key=d87c1b16903e53a32838c47af86924d8"
        const API_MOVIE_ID = this.state.id;
        const API_URL = `${API_BASE_URL}${API_MOVIE_ID}${API_KEY}`;

        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movieData: data });
            });

    }




    render() {
        return (

            <div className={DetailCSS.Detail}>


                <div className={DetailCSS.Detailmovie} id="movieDetail">
                    <div className={DetailCSS.imgdiv}>
                        <img className={DetailCSS.imgDetail} src={`https://image.tmdb.org/t/p/w500/${this.state.movieData.poster_path}`} id="movieImg" alt="imgmovie" />
                        <div className={DetailCSS.info} id="movieInfo">
                            <h2>Title : {this.state.movieData.title}  </h2>
                            <h5>Genre : {this.state.movieData.genre}  </h5>
                            <h5>Overvie : {this.state.movieData.overview}  </h5>
                            <h5 id="rating">Rating: {this.state.movieData.vote_average}  </h5>
                            <Link className={DetailCSS.link} to="/" >Back to list</Link>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}

