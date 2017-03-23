import React from 'react';
import { Link } from 'react-router';

import Comment from '../comment/comment';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchTrack(this.props.id)

  }

  componentDidMount() {
    this.props.fetchTrack(this.props.id)
  }

  // componentWillUpdate() {
  //   this.props.fetchTrack(this.props.id)
  //   console.log('dont do it');
  // }

  render() {
    const { id, title, description, userId, userName, userImg, imageUrl, comments, currentUser } = this.props;

    console.log(this.props);
    let commentsList;
    if (!comments || (comments.length === 0)) {
      commentsList = (
        <div className="no-comments">
          My code isn't broken. Be the first one to comment and check for yourself!
        </div>
      )
    } else {
      commentsList = comments.map( (comment, idx) => (
        <Comment key={idx}
          id={comment.id}
          body={comment.body}
          userId={comment.user_id}
          userName={comment.user_name}
          userImg={comment.user_img} />
      ))
    }

    let descriptionBox;
    if (description) {
      descriptionBox = (<div>{description}</div>)
    }

    let userButtons;
    if (currentUser && userId === currentUser.id) {
      // edit and delete buttons
    }

    return (
      <div className='track-page'>
        <div className='track-header'>
          <div className='track-info'>
            <Link to={`/users/${userId}`} className='track-username'>{userName}</Link>
            <span className='track-title'>{title}</span>
          </div>

          <div className='track-img'>
            <img src={imageUrl} />
          </div>
        </div>

        <div className='track-page-middle'>
          <div className='comment-form'>
            <input></input>
          </div>
          {userButtons}
        </div>

        <div className='track-page-bottom'>
          <div className='track-artist'>
            <div className='owner-img'>
              <img src={userImg} />
            </div>
            <span>{userName}</span>
          </div>

          <div className='description-n-comments'>
            <div> {descriptionBox}</div>


            <ul>
              {commentsList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Track;
