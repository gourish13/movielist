import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
  state = { page: 1 };

  setPage = page => { 
    if (this.state.page !== page)
      this.setState({ page });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header page={Number(this.state.page)} />
            <Route exact path="/">
              <Redirect to="/1" />
            </Route>
            <Route exact path="/:id">
              <MovieList setPage={this.setPage} />
            </Route>
            <Route path="/details/:id" component={MovieDetails} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
