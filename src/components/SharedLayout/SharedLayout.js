import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNav, StyledLink } from './SharedLayout.styled';
import StyledContainer from 'components/Container/Container.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <StyledNav>
          <StyledContainer>
            <ul style={{ display: 'flex', gap: '50px', listStyle: 'none' }}>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </ul>
          </StyledContainer>
        </StyledNav>
      </header>
      <Suspense fallback="null">
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
