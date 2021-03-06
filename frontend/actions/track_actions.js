import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const RECEIVE_PLAYER_STATUS = "RECEIVE_PLAYER_STATUS";

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

export const updatePlayerStatus = status => ({
  type: RECEIVE_PLAYER_STATUS,
  status
});

export const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
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
    .fail(err => dispatch(receiveTrackErrors(err.responseJSON)))
);

export const updateTrack = formData => dispatch => (
  TrackAPIUtil.updateTrack(formData)
    .then(res => dispatch(receiveTrack(res)))
);

export const deleteTrack = id => dispatch => (
  TrackAPIUtil.deleteTrack(id)
    .then( () => dispatch(receiveTrack(null)))
);
