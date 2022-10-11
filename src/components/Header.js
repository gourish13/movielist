import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ page }) {
  return (
    <header style={headerStyle}>
      <Link to={ "/" + page } style={linkStyle}>MovieList</Link>
    </header>
  );
}

const headerStyle = {
  background: '#1e1e1e',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
  boxShadow: '3px 4px 5px #6e6e6e',
  marginBottom: '2rem'
};

const linkStyle = {
  color: '#e9e9e9',
  textDecoration: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
};

Header.propTypes = { page: PropTypes.number.isRequired };

export default Header;
