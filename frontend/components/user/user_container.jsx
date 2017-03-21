import { connect } from 'react-redux';

import User from './user';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = ({ user, session }, { params }) => ({
  id: parseInt(params.userId),
  username: user.username,
  location: user.location,
  imageUrl: user.image_url,
  tracks: user.tracks,
  errors: user.errors,
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (formData) => dispatch(updateUser(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
