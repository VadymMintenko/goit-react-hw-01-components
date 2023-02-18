export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <li>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
