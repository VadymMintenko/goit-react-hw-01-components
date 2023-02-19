import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(element => {
        return <FriendListItem item={element} />;
      })}
    </ul>
  );
};
