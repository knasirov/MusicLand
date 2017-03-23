import React from 'react';
import { Link } from 'react-router';

import { deleteComment } from '../../util/comment_api_util';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    deleteComment(this.props.id).then( () => this.props.fetchTrack(this.props.trackId) )
  }

  render() {
    const { id, body, userId, userName, userImg, trackUserId, currentUserId } = this.props;

    let deleteButton;
    if ((currentUserId === userId) || (currentUserId === trackUserId)) {
      deleteButton = (
        <button className="comment-delete-btn" onClick={this.handleDelete}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      )
    }

    return (
      <li className='comment-li'>
        <div className='img-n-detail'>
          <div className='comment-img'>
            <img src={userImg}/>
          </div>

          <div className='comment-detail'>
            <Link className='comment-username' to={`/users/${userId}`}>
              {userName}
            </Link>
            <span className='comment-body'>{body}</span>
          </div>
        </div>

        {deleteButton}
      </li>
    )
  }
}

export default Comment;
