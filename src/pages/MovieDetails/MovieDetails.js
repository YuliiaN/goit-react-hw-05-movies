import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

import { StyledButton, StyledAdditional } from './MovieDetails.styled';
import { StyledText } from 'components/MovieCard/MovieCard.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import StyledContainer from 'components/Container/Container.styled';
import { api } from 'pages/Home/Home';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();

  useEffect(() => {
    (async function fetchMovieCard() {
      try {
        const res = await api.getMovieDetails(movieId);
        setMovie(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  const path = location.state?.from ?? '/movies';

  return (
    <StyledContainer style={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <StyledButton to={path} state={{ from: location }}>
        <BsArrowLeftShort style={{ width: '20px', height: '20px' }} />
        Go back
      </StyledButton>
      {movie && <MovieCard movie={movie} />}
      <StyledAdditional>
        <StyledText>Additional information</StyledText>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <li>
            <Link to="cast" state={{ from: path }} style={{ color: 'blue' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: path }} style={{ color: 'blue' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </StyledAdditional>
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default MovieDetails;
