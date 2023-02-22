import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  StyledCastList,
  StyledCastItem,
  StyledCastPicture,
  StyledCastText,
} from './Cast.styled';
import { api } from 'pages/Home/Home';
import { IMAGE_URL } from 'components/MovieCard/MovieCard';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function fetchMovieCast() {
      try {
        const res = await api.getMovieCredits(movieId);
        setCast(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <StyledCastList>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => (
          <StyledCastItem key={id}>
            <StyledCastPicture src={`${IMAGE_URL}${profile_path}`} />
            <StyledCastText style={{ fontWeight: '600' }}>
              {name}
            </StyledCastText>
            <StyledCastText>Character: {character}</StyledCastText>
          </StyledCastItem>
        ))}
    </StyledCastList>
  );
};

export default Cast;
