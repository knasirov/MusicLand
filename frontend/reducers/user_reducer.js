import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';

const userReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


export default userReducer;
