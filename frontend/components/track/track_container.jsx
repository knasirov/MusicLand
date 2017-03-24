import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Track from './track';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';

const mapStateToProps = ({ trackDetail, session }, { params }) => ({
  id: parseInt(params.trackId),
  title: trackDetail.title,
  description: trackDetail.description,
  userId: trackDetail.user_id,
  userName: trackDetail.user_name,
  userImg: trackDetail.user_img,
  imageUrl: trackDetail.image_url,
  comments: trackDetail.comments,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  updateTrack: formData => dispatch(updateTrack(formData)),
  deleteTrack: id => dispatch(deleteTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Track))
