import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getTrendingMovies() {
    try {
      const movies = await axios
        .get(`/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`)
        .then(movies => movies.data.results);
      return movies;
    } catch (err) {
      console.log(err);
    }
  },

  async getMoviesBySearch(query) {
    try {
      const movie = await axios.get(
        `/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}&page=1&include_adult=true`,
      );
      return movie;
    } catch (err) {
      console.log(err);
    }
  },

  async getMovieDetails(id) {
    try {
      const details = await axios.get(
        `/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`,
      );
      return details;
    } catch (err) {
      console.log(err);
    }
  },

  async getActorsFromMovie(id = 12) {
    try {
      const actors = await axios
        .get(`/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`)
        .then(actors => actors.data.cast);
      return actors;
    } catch (err) {
      console.log(err);
    }
  },

  async getReviewsOfMovie(id = 12) {
    try {
      const reviews = await axios.get(
        `/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_KEY}`,
      );
      return reviews;
    } catch (err) {
      console.log(err);
    }
  },
};
