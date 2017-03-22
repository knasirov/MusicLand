import { connect } from 'react-redux';

import Stream from './stream';
import { fetchTracks, fetchCurrentTrack } from '../../actions/track_actions';


const mapStateToProps = state => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream)
