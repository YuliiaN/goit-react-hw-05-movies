import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BsSearch } from 'react-icons/bs';

import { StyledForm, StyledInput, StyledButton } from './Movies.styled';
import StyledContainer from 'components/Container/Container.styled';
import MovieList from 'components/MovieList/MovieList';
import { api } from 'pages/Home/Home';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    if (!query) return;
    setSearchParams({ search: query });
  };

  useEffect(() => {
    if (!query) return;

    (async function fetchMoviesByQuery() {
      try {
        const res = await api.getMovieByQuery(query);
        setMovies(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [query]);

  return (
    <Suspense fallback="null">
      <StyledContainer>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput name="query" />
          <StyledButton type="submit">
            <BsSearch
              style={{ width: '20px', height: '20px', color: 'maroon' }}
            />
          </StyledButton>
        </StyledForm>
        {!!movies.length && <MovieList movies={movies} />}
      </StyledContainer>
    </Suspense>
  );
};

export default Movies;
