import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(element => {
        return (
          <li key={element.id}>
            <span className="status">{element.isOnline}</span>
            <img
              className="avatar"
              src={element.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{element.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
