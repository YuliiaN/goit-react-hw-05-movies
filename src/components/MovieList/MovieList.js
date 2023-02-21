import StyledMovieList from './MovieList.styled';
import MovieItem from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </StyledMovieList>
  );
};

MovieList.propTypes = {};

export default MovieList;
