import PropTypes from 'prop-types';
import {
  Container,
  AboutUser,
  List,
  Active,
  ListItem,
} from './Styles/Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className="profile">
      <Container className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="120px" />
        <AboutUser>
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </AboutUser>
      </Container>

      <List className="stats">
        <ListItem>
          <Active className="label">followers</Active>
          <Active className="quantity">{followers}</Active>
        </ListItem>
        <ListItem>
          <Active className="label">Views</Active>
          <Active className="quantity">{views}</Active>
        </ListItem>
        <ListItem>
          <Active className="label">Likes</Active>
          <Active className="quantity">{likes}</Active>
        </ListItem>
      </List>
    </div>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};
