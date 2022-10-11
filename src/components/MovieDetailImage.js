import React from 'react';
import PropTypes from 'prop-types';

export default function MovieDetailImage({ source, title }) {
  return (
    <img style={imgStyle} src={`https://image.tmdb.org/t/p/original${source}`} alt={title} />
  );
}

const imgStyle = {
  height: '60vh',
  width: '80vw',
  borderRadius: '50px',
  alignSelf: 'center',
};

MovieDetailImage.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
