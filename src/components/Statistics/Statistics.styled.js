import styled from 'styled-components';

export const StatisticsSection = styled.section`
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: 'center';
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  width: 100px;
  height: 150px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
