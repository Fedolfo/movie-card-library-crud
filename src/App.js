import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieDetails, NotFound, EditMovie, NewMovie, MovieList } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="movie-card-header">
          <h1 className="page-title">Movie Card Library CRUD</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movies/new">
            <NewMovie />
          </Route>
          <Route exact path="/movies/:id">
            {(props) => <MovieDetails { ...props } />}
          </Route>
          <Route exact path="/movies/:id/edit">
            {(props) => <EditMovie { ...props } />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
