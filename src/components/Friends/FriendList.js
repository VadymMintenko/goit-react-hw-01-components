import PropTypes from 'prop-types';
import { List, Item } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(element => {
        return (
          <Item key={element.id} isActive={element.isOnline === true}>
            <span className="status"></span>
            <img
              className="avatar"
              src={element.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{element.name}</p>
          </Item>
        );
      })}
    </List>
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
