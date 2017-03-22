import React from 'react';
import Modal from 'react-bootstrap-modal';
import { Link } from 'react-router';

import SignupFormContainer from '../session_form/signup_form_container';
import SigninFormContainer from '../session_form/signin_form_container';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, form: "" };
    this.logout = this.logout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState({ modalIsOpen: false })
    }
  }

  openModal(e) {
    e.preventDefault();
    let form;
    if (e.target.innerHTML === 'Create account') {
      form = <SignupFormContainer />
    } else {
      form = <SigninFormContainer />
    }
    this.setState({ form: form, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, form: "" });
  }

  render() {
    const { currentUser, logout } = this.props;

    let rightNavBar;

    if (currentUser) {
      rightNavBar = (
        <div className="right-navbar">
          <Link className='top-item' to="/upload">Upload</Link>
          <Link className='top-item' id="username" to={`/users/${currentUser.id}`}>
            {currentUser.username}
          </Link>
          <button className="top-item" onClick={this.logout}>Logout</button>
        </div>
      )
    } else {
      rightNavBar = (
        <div>
          <div className="right-navbar">
            <Link className='top-item' to="/upload">Upload</Link>
            <button className="logged-out-btn top-item" onClick={this.openModal}>Sign in</button>
            <button className="logged-out-btn create-acc top-item" onClick={this.openModal}>Create account</button>
          </div>

          <Modal
            show={this.state.modalIsOpen}
            onHide={this.closeModal}
            aria-labelledby="ModalHeader"
            >
            <Modal.Header closeButton>
              <Modal.Title id='ModalHeader'></Modal.Title>
              {this.state.form}
            </Modal.Header>
          </Modal>
        </div>
      )
    }

    return (
      <div className="full-navbar">
        <div className="top-navbar">
          <div className="left-navbar">
            <a href='/'>
              <img className="navbar-logo" alt="logo" to='/'
                src="http://www.adhdnationbook.com/wp-content/uploads/2016/09/LOGO-Soundcloud.png" />
            </a>
            <Link className='top-item right-border' to="/stream">Home</Link>
            <Link className='top-item right-border' to="/">Collection</Link>
            <form className="search-bar">
              <input type="search"></input>
            </form>
          </div>

          {rightNavBar}
        </div>
      </div>
    );
  }
}

export default TopBar;
