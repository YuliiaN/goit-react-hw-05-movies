import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  StyledCastList,
  StyledCastItem,
  StyledCastPicture,
  StyledCastText,
} from './Cast.styled';
import MovieService from 'components/services/MovieService';
import { IMAGE_URL } from 'components/MovieDetails/MovieDetails';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function fetchMovieCast() {
      try {
        const api = new MovieService();
        const res = await api.getMovieCredits(movieId);
        setCast(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if (!cast) return;

  return (
    <StyledCastList>
      {cast.map(({ id, name, character, profile_path }) => (
        <StyledCastItem key={id}>
          <StyledCastPicture src={`${IMAGE_URL}${profile_path}`} />
          <StyledCastText style={{ fontWeight: '600' }}>{name}</StyledCastText>
          <StyledCastText>Character: {character}</StyledCastText>
        </StyledCastItem>
      ))}
    </StyledCastList>
  );
};

export default Cast;
