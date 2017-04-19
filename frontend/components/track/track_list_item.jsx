import React from 'react';
import { Link } from 'react-router';

class TrackListItem extends React.Component {

  render () {
    const { id, userId, userName, title, imageUrl, currentTrackId } = this.props;
    let button;
    if (id === currentTrackId) {

    } else {
      button = (
        <button onClick={() => this.props.fetchCurrentTrack(id)}>
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </button>
      )
    }

    return (
      <li className='list-item'>
        <div className='li-img'>
          <img className='item-img' src={imageUrl} />
        </div>

        <div className='detail-n-waveform'>
          <div className='btn-n-detail'>
            <div className='play-btn'>
              {button}
            </div>

            <div className='li-detail'>
              <Link to={`/users/${userId}`} className="tl-user">{userName}</Link>
              <Link to={`/tracks/${id}`} className="tl-track">{title}</Link>
            </div>
          </div>

        </div>
      </li>
    )
  }
}

export default TrackListItem;
