import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});


export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

// NOT SURE IF I NEED THIS
// export const removeTrack = track => ({
//   type: REMOVE_TRACK,
//   track
// });

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchTracks = () => dispatch => (
  TrackAPIUtil.fetchTracks()
    .then(res => dispatch(receiveTracks(res)))
);

export const fetchTrack = id => dispatch => (
  TrackAPIUtil.fetchTrack(id)
    .then(res => dispatch(receiveTrack(res)))
);

export const fetchCurrentTrack = id => dispatch => (
  TrackAPIUtil.fetchTrack(id)
    .then(res => dispatch(receiveCurrentTrack(res)))
);


export const createTrack = formData => dispatch => (
  TrackAPIUtil.createTrack(formData)
    .then(res => dispatch(receiveTrack(res)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTrack = formData => dispatch => (
  TrackAPIUtil.updateTrack(formData)
    .then(res => dispatch(receiveTrack(res)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteTrack = id => dispatch => (
  TrackAPIUtil.deleteTrack(id)
    // .then(res => dispatch(removeTrack(res)))
);
