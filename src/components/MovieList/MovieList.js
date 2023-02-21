import StyledMovieList from './MovieList.styled';
import MovieItem from 'components/MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </StyledMovieList>
  );
};

export default MovieList;
