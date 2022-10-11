import React from 'react';
import tmdbLogo from '../images/tmdb.svg';

function Footer() {
  return (
    <footer style={ footerStyle }>
      <p style={ {fontSize: '25px'} }>
        <b>MovieList</b> is powered by
        {' '}
        <a href='https://www.themoviedb.org/' target='_black'>
          <img style={ {height: '20px', width: '240px'} }
            src={tmdbLogo} alt='The Movie DB' />
        </a>
      </p>
    </footer>
  );
}

const footerStyle={
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
  background: 'linear-gradient(to right, #222, #444, #666, #444, #222)'
};

export default Footer;
