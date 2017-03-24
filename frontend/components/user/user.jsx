import React from 'react';
import Modal from 'react-bootstrap-modal';

import EditFormContainer from './edit_form_container.jsx';
import TrackListItem from '../track/track_list_item';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  componentDidMount() {
    this.props.fetchUser(this.props.id);
  };

  componentWillUpdate() {
    this.props.fetchUser(this.props.id);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true })
  };

  closeModal() {
    this.setState({ modalIsOpen: false })
  };

  render() {
    const { id, username, location, imageUrl, tracks, errors, currentUser } = this.props;
    let listItems;

    if (tracks) {
      listItems = tracks.map( (track, idx) => (
        <TrackListItem key={idx}
          id={track.id}
          title={track.title}
          userId={id}
          userName={username}
          imageUrl={track.image_url}/>
      ))
    }

    let edit;
    if (currentUser && id === currentUser.id) {
      edit = (
        <div>
          <button onClick={this.openModal}>Edit</button>

          <Modal
            show={this.state.modalIsOpen}
            onHide={this.closeModal}
            aria-labelledby="ModalHeader"
            >
            <Modal.Header closeButton>
              <Modal.Title id='ModalHeader'></Modal.Title>
              <div>Edit your profile</div>
            </Modal.Header>
            <Modal.Body>
              <EditFormContainer
                id={id}
                username={username}
                location={location}
                imageUrl={imageUrl}
                errors={errors}
                closeModal={() => this.closeModal()}/>
            </Modal.Body>
          </Modal>
        </div>
      )
    };

    return (
      <div className="user-page">
        <header className='user-header'>
          <div className='user-img'>
            <img src={imageUrl} />
          </div>
          <div className='user-info'>
            <span className='username'>{username}</span>
            <span className='location'>{location}</span>
          </div>
        </header>
        <div className='outer-middle'>
          <div className='middle-bar'>
            <h3>Tracks</h3>
            <div>{edit}</div>
          </div>
        </div>

        <ul className='track-list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default User;
