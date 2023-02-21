import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

import MovieService from 'components/services/MovieService';
import {
  StyledButton,
  StyledCard,
  StyledPoster,
  StyledInfo,
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledAdditional,
} from './MovieDetails.styled';
import StyledContainer from 'components/Container/Container.styled';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();

  useEffect(() => {
    (async function fetchMovieCard() {
      try {
        const api = new MovieService();
        const res = await api.getMovieDetails(movieId);
        setMovie(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if (!movie) return;

  const { title, poster_path, vote_average, genres, overview } = movie;
  const genresList = genres.map(({ name }) => name).join(', ');
  const userScore = Math.round(vote_average * 10);

  return (
    <StyledContainer style={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <StyledButton to={location.state.from} state={{ from: location }}>
        <BsArrowLeftShort style={{ width: '20px', height: '20px' }} />
        Go back
      </StyledButton>
      <StyledCard>
        <StyledPoster
          src={`${IMAGE_URL}${poster_path}`}
          alt={title}
        ></StyledPoster>
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledText>User score: {userScore}%</StyledText>
          <StyledSubTitle>Overview</StyledSubTitle>
          <StyledText>{overview}</StyledText>
          <StyledSubTitle>Genres</StyledSubTitle>
          <StyledText>{genresList}</StyledText>
        </StyledInfo>
      </StyledCard>
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
            <Link to="cast" style={{ color: 'blue' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" style={{ color: 'blue' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </StyledAdditional>
      <Outlet />
    </StyledContainer>
  );
};

export default MovieDetails;
