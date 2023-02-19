import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  color: white;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 10px;
  color: white;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Active = styled.p`
  margin: 0;
`;
