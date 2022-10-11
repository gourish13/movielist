import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PageSwitcher( { faClass, page } ) {
  return (
    <div style={blockStyle}>
      <Link style={linkStyle} to={'/' + page}>
        <i className={faClass}></i>
      </Link>
    </div>
  );
}

const blockStyle = {
  background: '#1e1e2e',
  margin: '0.2rem',
  borderRadius: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '1.5rem',
  padding: '0.5rem',
  color: '#f3f7f0'
};

PageSwitcher.propTypes = {
  faClass: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired
}
