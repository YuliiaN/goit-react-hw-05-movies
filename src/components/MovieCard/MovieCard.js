import {
  StyledCard,
  StyledPoster,
  StyledInfo,
  StyledTitle,
  StyledSubTitle,
  StyledText,
} from './MovieCard.styled';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, genres, overview } = movie;
  const genresList = genres.map(({ name }) => name).join(', ');
  const userScore = Math.round(vote_average * 10);

  return (
    <StyledCard>
      <StyledPoster src={`${IMAGE_URL}${poster_path}`} alt={title} />
      <StyledInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>User score: {userScore}%</StyledText>
        <StyledSubTitle>Overview</StyledSubTitle>
        <StyledText>{overview}</StyledText>
        <StyledSubTitle>Genres</StyledSubTitle>
        <StyledText>{genresList}</StyledText>
      </StyledInfo>
    </StyledCard>
  );
};

export default MovieCard;
