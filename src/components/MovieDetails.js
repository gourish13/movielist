import React from 'react';
import { withRouter } from 'react-router-dom';
import MovieDetailImage from './MovieDetailImage';
import MovieDetailInfo from './MovieDetailInfo';

class MovieDetails extends React.Component {
  state = { 
    movie: {
      title: '',
      overview: '',
      release_date: '',
      backdrop_path: '',
      vote_average: 0,
      runtime: 0,
      genres: [],
      production_companies: []
    } 
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const API_KEY = process.env.REACT_APP_TMDB_API;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => this.setState({ movie: data }))
      .catch(console.error)
  }

  render() {
    return (
      <div style={detailPageStyle}>
        <MovieDetailImage 
          source={this.state.movie.backdrop_path}
          title={this.state.movie.title}
        />
        <MovieDetailInfo 
          title={this.state.movie.title}
          overview={this.state.movie.overview}
          release={this.state.movie.release_date}
          rating={this.state.movie.vote_average}
          runtime={this.state.movie.runtime}
          genres={this.state.movie.genres}
          productions={this.state.movie.production_companies}
        />
      </div>
    );
  }
}

const detailPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

export default withRouter(MovieDetails);
