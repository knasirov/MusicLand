import React from 'react';
import { Link } from 'react-router';

class TrackListItem extends React.Component {

  render () {
    const { id, userId, userName, title, imageUrl } = this.props;
    return (
      <li className='list-item'>
        <div className='li-img'>
          <img className='item-img' src={imageUrl} />
        </div>
        <div className='li-detail'>
          <Link to={`/users/${userId}`}>{userName}</Link>
          <Link to={`/tracks/${id}`}>{title}</Link>
        </div>
      </li>
    )
  }
}

export default TrackListItem;
