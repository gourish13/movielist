import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard'
import PageSwitcher from './PageSwitcher';

class MovieList extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const page = Number(this.props.match.params.id);
    if (page < 0 || page > 500) {
      this.props.history.push('/1');
      return;
    }
    this.props.setPage(page);
    const API_KEY = process.env.REACT_APP_TMDB_API;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results }))
      .catch(console.error)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id === prevProps.match.params.id)
      return;
    const page = Number(this.props.match.params.id);
    this.props.setPage(page);
    const API_KEY = process.env.REACT_APP_TMDB_API;

    window.scroll(0, 0);

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results }))
      .catch(console.error)
  }

render() {
    const page = Number(this.props.match.params.id);
    return (
      <React.Fragment>
        <div style={ pageStyle }>
          {
            this.state.movies.map( movie => 
              <MovieCard className='card' key={movie.id} movie={movie}/>
          )}
        </div>
        <div style={ pageSwitcherStyle }>
          {page > 1 ? <PageSwitcher faClass='fa fa-arrow-left' page={page - 1} /> : ''}
          {page < 500 ? <PageSwitcher faClass='fa fa-arrow-right' page={page + 1} /> : ''}
        </div>
      </React.Fragment>
    );
  }
}

const pageStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

const pageSwitcherStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
};

MovieList.propTypes = {
  setPage: PropTypes.func.isRequired
}

export default withRouter(MovieList);
