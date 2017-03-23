import React from 'react';
import { Link } from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, body, userId, userName, userImg } = this.props;
    return (
      <li className='comment-li'>
        <div className='comment-img'>
          <img src={userImg}/>
        </div>

        <div className='comment-detail'>
          <Link className='comment-username' to={`/users/${userId}`}>
            {userName}
          </Link>
          <span className='comment-body'>{body}</span>
        </div>
      </li>
    )
  }
}

export default Comment;
