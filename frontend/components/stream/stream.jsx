import React from 'react';

import TrackListItem from '../track/track_list_item';

class Stream extends React.Component {

  componentWillMount() {
    this.props.fetchTracks();
  }

  render() {
    const { currentTrackId, currentTrackIsPlaying, updatePlayerStatus, fetchCurrentTrack } = this.props;
    let listItems = this.props.tracks.map( (track, idx) => (
      <TrackListItem key={idx}
        id={track.id}
        userName={track.user_name}
        userId={track.user_id}
        title={track.title}
        imageUrl={track.image_url}
        currentTrackId={currentTrackId}
        currentTrackIsPlaying={currentTrackIsPlaying}
        updatePlayerStatus={updatePlayerStatus}
        fetchCurrentTrack={fetchCurrentTrack} />
    ));

    return(
      <div className='stream-main'>
        <div className='stream-navbar'>
          <h2>Stream</h2>
        </div>
        <ul className='stream-list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default Stream;
