import React from 'react';
import PropTypes from 'prop-types';

export default function ProductionImages({ productions }) {
  return (
    <div style={ imagesStyle }>
      { productions.map(production => 
       (production.logo_path !== null) ? 
        ( <img style={{ marginBottom: '20px', width: '200px', height: '100px' }} 
          src={`https://image.tmdb.org/t/p/w500${production.logo_path}`} alt="" /> ) :
        ( <p style={{
            marginBottom: '20px', fontWeight: 'bold', fontSize: '1.8rem', color: '#0a0a0a'
          }}>
            {production.name}
          </p> )
      )}
    </div>
  );
}

const imagesStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginBottom: '30px',
  marginTop: '20px',
  marginLeft: '8vw',
  marginRight: '8vw',
};

ProductionImages.propTypes = { productions: PropTypes.array.isRequired };
