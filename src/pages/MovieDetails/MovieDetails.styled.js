import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledButton = styled(Link)`
  display: inline-flex;
  gap: 2px;
  align-items: center;
  transition: transform 0.25s;

  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid RGBA(0, 0, 0, 0.1);
  color: black;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const StyledAdditional = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  border: 1.5px solid grey;
`;
