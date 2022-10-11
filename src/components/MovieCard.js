import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCardImage from './MovieCardImage';
import MovieCardInfo from './MovieCardInfo';

class MovieCard extends React.Component {
  render() {
    return (
      <div style={ cardStyle }>
        <Link style={ {textDecoration: 'none'} } to={`/details/${this.props.movie.id}`}>
          <MovieCardImage
            poster={this.props.movie.poster_path}
            title={this.props.movie.title}
          />
        </Link>
        <MovieCardInfo 
          title={this.props.movie.title}
          overview={this.props.movie.overview}
          release={this.props.movie.release_date}
          rating={this.props.movie.vote_average}
        />
      </div>
    );
  }
}

const cardStyle = {
  display: 'flex',
  marginBottom: '30px'
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard;
