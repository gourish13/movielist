import React from 'react';
import PropTypes from 'prop-types';
import ProductionImages from './ProductionImages';

export default function MovieDetailInfo(props) {
  return (
    <React.Fragment>
      <div style= {{marginLeft: '10vw', marginRight: '10vw', marginTop: '10px', padding: '20px'}}>
        <p style={{ fontWeight: 'bold', fontSize: '2.3rem', color: '#f1f3f7'}}>{props.title}</p>
      </div>

      <div style={{ marginLeft: '10vw', marginRight: '10vw', padding: '5px'}}>
        <p style={{ fontSize: '1.2rem' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {props.overview}
        </p>
      </div>

      <div style={{ 
        marginLeft: '10vw',
        marginRight: '10vw',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Release Date: {props.release}</p>
        &nbsp;
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Rating: {props.rating}</p>
        &nbsp;
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Runtime: {props.runtime} mins</p>
       </div>

      <div style={{ 
        marginLeft: '10vw',
        marginRight: '10vw',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Genres:&nbsp;
          {props.genres.map(genre => genre.name + " ")}
        </p>
      </div>

      <ProductionImages productions={props.productions} />
    </React.Fragment>
  );
}

MovieDetailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  productions: PropTypes.array.isRequired,
};
