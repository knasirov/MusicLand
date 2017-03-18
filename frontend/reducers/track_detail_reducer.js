import merge from 'lodash/merge';

import {
  RECEIVE_TRACK, REMOVE_TRACK, RECEIVE_ERRORS
} from '../actions/track_actions';

const trackDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, action.track);
    // NOT SURE IF I NEED THIS
    // case REMOVE_TRACK:
    case RECEIVE_ERRORS:
      return merge({}, action.errors);
    default:
      return state;
  }
};

export default trackDetailReducer;
