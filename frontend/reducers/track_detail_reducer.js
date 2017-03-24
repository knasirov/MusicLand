import merge from 'lodash/merge';

import { RECEIVE_TRACK } from '../actions/track_actions';

const trackDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, action.track);
    default:
      return state;
  }
};

export default trackDetailReducer;
