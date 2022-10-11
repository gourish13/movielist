import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCardImage(props) {
  return (
      <img style={imgStyle}
        src={`https://image.tmdb.org/t/p/w500${props.poster}`}
        alt={props.title}
      />
  );
}

const imgStyle = {
  height: '300px',
  width: '200px'
};

MovieCardImage.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
