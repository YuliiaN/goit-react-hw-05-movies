import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieService from 'components/services/MovieService';
import StyledContainer from 'components/Container/Container.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function fetchTrendingMovies() {
      const api = new MovieService();
      const res = await api.getTrendingMovies();
      setMovies(res);
    })();
  }, []);

  if (!movies) {
    return;
  }

  return (
    <section style={{ padding: '30px 0' }}>
      <StyledContainer>
        <h1
          style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px' }}
        >
          Trending today
        </h1>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {movies.map(({ id, title, name }) => {
            return (
              <li key={id} id={id}>
                <Link to="/" style={{ color: '#252423' }}>
                  {title ? title : name}
                </Link>
              </li>
            );
          })}
        </ul>
      </StyledContainer>
    </section>
  );
};

export default Home;
