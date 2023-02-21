import styled from '@emotion/styled';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export const StyledCastItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  padding: 0 0 10px;
  width: calc((100% - 40px) / 3);
  border-radius: 20px;
  text-align: center;

  box-shadow: 0px 1px 10px -6px rgba(0, 0, 0, 0.75);
`;

export const StyledCastPicture = styled.img`
  width: 150px;
  border-radius: 4px;
`;

export const StyledCastText = styled.p`
  font-size: 16px;
`;
