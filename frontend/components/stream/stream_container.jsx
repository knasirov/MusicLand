import { connect } from 'react-redux';

import Stream from './stream';
import { fetchTracks } from '../../actions/track_actions';


const mapStateToProps = state => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream)
