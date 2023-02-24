import PropTypes from 'prop-types';
import { Span } from './FriendsList.styled';

export const FriendListItem = ({ element: { avatar, name, isOnline } }) => {
  return (
    <div>
      <Span className="status" isActive={isOnline === true}></Span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  element: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};
