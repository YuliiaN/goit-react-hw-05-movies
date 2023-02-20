import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNav = styled.nav`
  padding: 15px 0;
  box-shadow: 0px 1px 5px 0px RGBA(0, 0, 0, 0.5);
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: maroon;
  }
`;
