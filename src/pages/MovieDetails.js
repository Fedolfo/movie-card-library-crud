import React, { Component } from 'react';

import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchGetMovie = this.fetchGetMovie.bind(this);
    this.bodyMovieDetails = this.bodyMovieDetails.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  async fetchGetMovie() {
    const { match: { params: { id } } } = this.props;
    const RequestID = await movieAPI.getMovie(id);
    this.setState({
      movie: RequestID,
      loading: false,
    });
  }

  bodyMovieDetails(movie) {
    const { title, storyline, imagePath,
      genre, rating, subtitle, id } = movie;
    return (
      <div className="main-container-movieDetails">
        <div data-testid="movie-details" className="container-movieDetails">
          <img
            className="container-image"
            alt="Movie Cover"
            src={ imagePath }
          />
          <p className="container-title">{ `Title ${title}`}</p>
          <p className="container-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="container-storyline">{ `Storyline: ${storyline}` }</p>
          <p className="container-genre">{ `Genre: ${genre}` }</p>
          <p className="container-rating">{ `Rating: ${rating}` }</p>
          <div className="container-buttonDetails">
            <Link
              className="LinkSty"
              to="/"
              onClick={ () => this.delete(id) }
            >
              DELETAR
            </Link>
            <Link className="LinkSty" to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link className="LinkSty" to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }

  async delete(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;

    return (
      loading ? <Loading /> : this.bodyMovieDetails(movie)
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
