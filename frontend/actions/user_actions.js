import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = " RECEIVE_USER_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id)
    .then(res => dispatch(receiveUser(res)))
);

export const updateUser = formData => dispatch => (
  UserAPIUtil.updateUser(formData)
    .then(res => dispatch(receiveUser(res)))
);
