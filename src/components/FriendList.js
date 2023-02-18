import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(element => {
        <FriendListItem item={element} />;
      })}
    </ul>
  );
};
