import React from 'react';
import { Link } from 'react-router';

import { fetchCurrentTrack } from '../../actions/track_actions';

class TrackListItem extends React.Component {

  render () {
    const { id, userId, userName, title, imageUrl } = this.props;
    return (
      <li className='list-item'>
        <div className='li-img'>
          <img className='item-img' src={imageUrl} />
        </div>

        <div className='detail-n-waveform'>
          <div className='btn-n-detail'>
            <div className='play-btn'>
              <button onClick={() => this.props.fetchCurrentTrack(id)}>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              </button>
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
