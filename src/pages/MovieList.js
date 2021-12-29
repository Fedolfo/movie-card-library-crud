import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../App.css';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const fetchMovies = await movieAPI.getMovies();
    this.setState({
      movies: [...fetchMovies],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list" className="movie-list">
        <div className="container-button-addcart">
          <Link className="addcart" to="movies/new">ADICIONAR CARTÃO</Link>
        </div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
