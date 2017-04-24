import merge from 'lodash/merge';

import { RECEIVE_CURRENT_TRACK, RECEIVE_PLAYER_STATUS } from '../actions/track_actions';

const currentTrackReducer = ( state={ isPlaying: false }, action ) => {
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      return merge({}, state, action.track);
    case RECEIVE_PLAYER_STATUS:
      return merge({}, state, { isPlaying: action.status });
    default:
      return state;
  }
};

export default currentTrackReducer;
