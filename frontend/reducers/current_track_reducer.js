import { RECEIVE_TRACK } from '../actions/track_actions';

const currentTrackReducer = ( state={}, action ) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default currentTrackReducer;
