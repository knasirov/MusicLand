import { connect } from 'react-redux';

import EditTrackForm from './edit_track_form';
import { updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  title: ownProps.title,
  description: ownProps.description,
  imageUrl: ownProps.imageUrl,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTrack: formData => dispatch(updateTrack(formData)),
  closeModal: () => ownProps.closeModal(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrackForm)
