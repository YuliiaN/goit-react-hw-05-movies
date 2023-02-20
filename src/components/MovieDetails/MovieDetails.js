import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
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

const MovieDetails = () => {
  // const { movieId } = useParams();
  // console.log(movieId);

  return (
    <StyledContainer>
      <StyledButton to="movies">
        <BsArrowLeftShort style={{ width: '20px', height: '20px' }} />
        Go back
      </StyledButton>
      <StyledCard>
        <StyledPoster src="poster.jpg" alt=""></StyledPoster>
        <StyledInfo>
          <StyledTitle>Movie name</StyledTitle>
          <StyledText>Score</StyledText>
          <StyledSubTitle>Overview</StyledSubTitle>
          <StyledText>Description</StyledText>
          <StyledSubTitle>Genres</StyledSubTitle>
          <StyledText>Genres list</StyledText>
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
            <Link to="/" style={{ color: 'blue' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="/" style={{ color: 'blue' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </StyledAdditional>
    </StyledContainer>
  );
};

export default MovieDetails;
