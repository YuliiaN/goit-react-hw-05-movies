import axios from 'axios';

const API_KEY = 'api_key=b72e97d50f503cf310444389e0d21ec6';
const BASE_URL = 'https://api.themoviedb.org/3';

class MovieService {
  fetchMovie = async url => {
    const res = await axios.get(`${url}`);
    return res.data.results;
  };

  getTrendingMovies = () => {
    return this.fetchMovie(`${BASE_URL}/trending/all/day?${API_KEY}`);
  };

  getMovieDetails = id => {
    return this.fetchMovie(`${BASE_URL}/movie/${id}?${API_KEY}&language=en-US`);
  };

  getMovieByQuery = query => {
    return this.fetchMovie(
      `${BASE_URL}/search/movie?${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
    );
  };

  getMovieCredits = id => {
    return this.fetchMovie(
      `${BASE_URL}/movie/${id}/credits?${API_KEY}&language=en-US`
    );
  };

  getMovieReviews = id => {
    return this.fetchMovie(`${BASE_URL}/review/${id}?${API_KEY}`);
  };
}

export default MovieService;
