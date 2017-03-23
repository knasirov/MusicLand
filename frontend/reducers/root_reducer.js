import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import tracksIndexReducer from './tracks_index_reducer';
import currentTrackReducer from './current_track_reducer';
import trackDetailReducer from './track_detail_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  tracks: tracksIndexReducer,
  currentTrack: currentTrackReducer,
  trackDetail: trackDetailReducer,
});

export default rootReducer;
