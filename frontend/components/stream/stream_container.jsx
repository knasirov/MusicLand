import { connect } from 'react-redux';

import Stream from './stream';
import { fetchTracks, fetchCurrentTrack, updatePlayerStatus } from '../../actions/track_actions';


const mapStateToProps = state => ({
  tracks: state.tracks,
  currentTrackId: state.currentTrack.id,
  currentTrackIsPlaying: state.currentTrack.isPlaying
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id)),
  updatePlayerStatus: status => dispatch(updatePlayerStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream)
