import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map(element => {
          return (
            <li key={element.id}>
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
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
