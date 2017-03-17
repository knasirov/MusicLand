export const fetchTracks = () => (
  $.ajax({
    url: 'api/tracks',
    method: "GET"
  })
);

export const fetchTrack = id => (
  $.ajax({
    url: `api/tracks/${id}`,
    method: 'GET'
  })
);

export const createTrack = formData => (
  $.ajax({
    url: 'api/tracks',
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  })
);

export const updateTrack = formData => (
  $.ajax({
    url: `api/tracks/${formData.track.id}`,
    method: "PATCH",
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  })
);

export const deleteTrack = id => (
  $.ajax({
    url: `api/tracks/${id}`,
    method: 'DELETE'
  })
);
