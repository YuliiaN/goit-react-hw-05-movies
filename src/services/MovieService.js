import axios from 'axios';

const API_KEY = 'api_key=b72e97d50f503cf310444389e0d21ec6';
const BASE_URL = 'https://api.themoviedb.org/3';

class MovieService {
  fetchMovie = async url => {
    const res = await axios.get(`${BASE_URL}${url}`);
    return res.data;
  };

  getTrendingMovies = () => {
    return this.fetchMovie(`/trending/all/day?${API_KEY}`);
  };

  getMovieDetails = async id => {
    const res = await this.fetchMovie(`/movie/${id}?${API_KEY}&language=en-US`);
    const { poster_path, title, vote_average, genres, overview } = res;
    return {
      poster_path,
      title,
      vote_average,
      genres,
      overview,
    };
  };

  getMovieByQuery = async query => {
    const res = await this.fetchMovie(
      `/search/movie?${API_KEY}&language=en-US&page=1&query=${query}`
    );
    const { results } = res;
    const movies = results.map(({ id, title, name }) => ({ id, title, name }));
    return movies;
  };

  getMovieCredits = async id => {
    const res = await this.fetchMovie(
      `/movie/${id}/credits?${API_KEY}&language=en-US`
    );
    const { cast } = res;
    const arr = [];
    for (let i = 0; i < 12; i += 1) {
      arr.push(cast[i]);
    }
    return arr;
  };

  getMovieReviews = async id => {
    const res = await this.fetchMovie(
      `/movie/${id}/reviews?${API_KEY}&language=en-US`
    );
    const { results } = res;
    const props = results.map(
      ({ id, content, author_details: { username, rating } }) => ({
        id,
        content,
        username,
        rating,
      })
    );
    return props;
  };
}

export default MovieService;
