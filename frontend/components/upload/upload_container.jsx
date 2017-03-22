import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Upload from './upload';
import { createTrack } from './../../actions/track_actions';

const mapStateToProps = state => ({
  userId: state.session.currentUser.id

});

const mapDispatchToProps = dispatch => ({
  createTrack: formData => dispatch(createTrack(formData))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Upload))
