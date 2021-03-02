import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Spinner from './components/spinner/Spinner';
import css from './App.module.css';

const Home = lazy(() => import('./views/main/Home'));
const Movies = lazy(() => import('./views/movies/Movies'));
const MovieDetails = lazy(() => import('./views/moviesDetails/MovieDetails'));
const Notification = lazy(() =>
  import('./components/notification/Notification'),
);

class App extends Component {
  state = {};

  render() {
    return (
      <div className={css.container}>
        <Navigation />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route component={Notification} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
