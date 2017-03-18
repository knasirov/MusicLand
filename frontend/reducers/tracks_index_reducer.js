import { RECEIVE_TRACKS } from '../actions/track_actions';

const tracksIndexReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksIndexReducer;
