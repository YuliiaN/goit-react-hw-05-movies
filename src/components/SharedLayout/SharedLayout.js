import { Outlet } from 'react-router-dom';
import { StyledNav, StyledLink } from './SharedLayout.styled';
import StyledContainer from 'components/Container/Container.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <StyledNav>
          {' '}
          <StyledContainer>
            <ul
              className="nav-list"
              style={{ display: 'flex', gap: '50px', listStyle: 'none' }}
            >
              <li className="nav-item">
                <StyledLink to="/" className="active">
                  Home
                </StyledLink>
              </li>
              <li className="nav-item">
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </ul>
          </StyledContainer>
        </StyledNav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
