import { useState, useEffect } from 'react';
import MovieService from 'services/MovieService';
import StyledContainer from 'components/Container/Container.styled';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchTrendingMovies() {
      try {
        setLoading(true);
        const api = new MovieService();
        const res = await api.getTrendingMovies();
        const { results } = res;
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <section style={{ padding: '30px 0' }}>
        <StyledContainer>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            Trending today
          </h1>
          <MovieList movies={movies} />
        </StyledContainer>
      </section>
      {loading && <Loader />}
    </>
  );
};

export default Home;
