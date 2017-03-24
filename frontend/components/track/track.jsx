import React from 'react';
import { Link } from 'react-router';

import Comment from '../comment/comment';
import { createComment } from '../../util/comment_api_util';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchTrack(this.props.id);
    this.state = { commentBody: "" };
    this.updateComment = this.updateComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.checkSignin = this.checkSignin.bind(this);
  }

  componentWillMount() {
    this.props.fetchTrack(this.props.id);
  }

  checkSignin() {
    if (!this.props.currentUser) {
      document.getElementById('comment-form').blur();
      document.getElementById('signin').click();
    }
  }

  updateComment(e) {
    e.preventDefault();
    this.setState({ commentBody: e.target.value })
  }

  submitComment(e) {
    e.preventDefault();
    const { currentUser, id, fetchTrack } = this.props;
    if (e.key === 'Enter') {
      createComment({
        comment: {
          body: this.state.commentBody,
          user_id: currentUser.id,
          track_id: id
        }
      }).then(() => fetchTrack(id))

      this.setState({ commentBody: "" });
    }
  }

  render() {
    const { id, title, description, userId, userName, userImg, imageUrl, comments, currentUser } = this.props;
    // console.log(this.props);
    // console.log(`!comments: ${!comments}`);
    // console.log(`length: ${comments.length}`);
    let commentsList;
    if (!comments || (comments.length === 0)) {
      commentsList = (
        <div className="no-comments">
          <span>Seems a little quiet over here</span>
          <span>Be the first one to comment on this track</span>
        </div>
      )
    } else {
      commentsList = comments.map( (comment, idx) => (
        <Comment key={idx}
          id={comment.id}
          body={comment.body}
          userId={comment.user_id}
          userName={comment.user_name}
          userImg={comment.user_img}
          trackUserId={userId}
          currentUser={currentUser}
          trackId={id}
          fetchTrack={this.props.fetchTrack} />
      ))
    }

    let descriptionBox;
    if (description) {
      descriptionBox = (<div className='description'>{description}</div>)
    }

    let userButtons;
    if (currentUser && userId === currentUser.id) {
      // edit and delete buttons
    }

    let commentUserImg;
    if (currentUser) {
      commentUserImg = currentUser.image_url;
    } else {
      commentUserImg = "https://s3.amazonaws.com/musicland-dev/users/images/default_user.png"
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
          <div className='comment-box'>
            <div className='comment-user-img'>
              <img src={commentUserImg} />
            </div>

            <div className='comment-form'>
              <input id='comment-form'
                className='comment-input'
                value={this.state.commentBody}
                onFocus={this.checkSignin}
                placeholder='Write a comment'
                onChange={this.updateComment}
                onKeyPress={this.submitComment}>
              </input>
            </div>
          </div>
          {userButtons}
        </div>

        <div className='track-page-bottom'>
          <div className='track-artist'>
            <div className='owner-img'>
              <img src={userImg} />
            </div>
            <Link to={`/users/${userId}`}>{userName}</Link>
          </div>

          <div className='description-n-comments'>
            <div> {descriptionBox}</div>


            <ul className='comments-list'>
              <span className='comments-header'>Comments</span>
              {commentsList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Track;
