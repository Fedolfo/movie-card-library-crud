import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, id, imagePath } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h1 className="movie-card-title">{ title }</h1>
        <img className="movie-card-image" src={ imagePath } alt="Capa do Filme" />
        <h2 className="movie-card-subtitle">{ subtitle }</h2>
        <p className="movie-card-storyline">{ storyline }</p>
        <Link className="movie-card-details" to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
