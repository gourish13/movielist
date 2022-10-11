import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCardInfo(props) {
  return (
    <div style={cardInfoStyle}>
      <p style={titleStyle}>{props.title}</p>
      <p style={overviewStyle}>{props.overview}</p>
      <p style={titleStyle}>Release Date: {props.release}</p>
      <p style={titleStyle}>Rating: {props.rating}</p>
    </div>
  );
}

const cardInfoStyle = {
  height: '300px',
  width: '220px',
  padding: '0.5rem',
  overflow: 'scroll',
  color: '#e1e1e1',
  background: 'linear-gradient(to right, #666, #444, #222)',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1rem',
  marginBottom: '10px'
};

const overviewStyle = {
  fontSize: '0.8rem',
  marginBottom: '10px',
  color: '#cccccc'
};

MovieCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
