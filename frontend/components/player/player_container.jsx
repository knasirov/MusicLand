import { connect } from 'react-redux';

import Player from './player';
import { updatePlayerStatus } from '../../actions/track_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  updateStatus: status => dispatch(updatePlayerStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
