import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsSection,
} from './Styles/Statistics.styled';

export const Statistics = ({ stats, title = 'UPLOAD STATS' }) => {
  return (
    <StatisticsSection>
      <h2 className="title">{title}</h2>
      <StatisticsList>
        {stats.map(element => {
          return (
            <StatisticsItem
              key={element.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
