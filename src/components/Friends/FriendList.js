import PropTypes from 'prop-types';
import { List, Item } from './FriendsList.styled';
import { FriendListItem } from 'components/Friends/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(element => (
        <Item key={element.id}>
          <FriendListItem element={element} />
        </Item>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
