import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Item = styled.li`
  border: solid 1px green;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: pink;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const Span = styled.span`
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};

  width: 10px;
  height: 10px;
  border-radius: 50px;

  display: flex;
`;
