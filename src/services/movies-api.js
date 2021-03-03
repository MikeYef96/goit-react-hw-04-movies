import axios from 'axios';

const KEY = 'a3f1bffb5eca2c1e671aa27884e4851b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const api = {
  async getTrendingMovies() {
    try {
      const movies = await axios
        .get(`trending/movie/day?api_key=${KEY}`)
        .then(movies => movies.data.results);
      return movies;
    } catch (error) {
      console.log(error);
    }
  },

  async getMoviesBySearch(query) {
    try {
      const movie = await axios.get(
        `search/movie?api_key=${KEY}&query=${query}&page=1&include_adult=false`,
      );
      return movie;
    } catch (error) {
      console.log(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const details = await axios.get(`movie/${id}?api_key=${KEY}`);
      return details;
    } catch (error) {
      console.log(error);
    }
  },
  async getActorsFromMovie(id = 12) {
    try {
      const actors = await axios
        .get(`movie/${id}/credits?api_key=${KEY}`)
        .then(actors => actors.data.cast);
      return actors;
    } catch (error) {
      console.log(error);
    }
  },
  async getReviewsOfMovie(id = 12) {
    try {
      const reviews = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
      return reviews;
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
