import React from 'react';
import Modal from 'react-bootstrap-modal';

import SignupFormContainer from '../session_form/signup_form_container';
import SigninFormContainer from '../session_form/signin_form_container';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, form: "" };
    this.logout = this.logout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.submitAndClose = this.submitAndClose.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleSubmit() {}

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

  submitAndClose() {
    this.closeModal();
  }

  closeModal() {
    this.setState({ modalIsOpen: false, form: "" });
  }

  render() {
    const { currentUser, logout } = this.props;

    if (currentUser) {
      return (
        <div>
          <span>{currentUser.username}</span>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.openModal}>Sign in</button>
          <button onClick={this.openModal}>Create account</button>

          <Modal
            show={this.state.modalIsOpen}
            onHide={this.closeModal}
            aria-labelledby="ModalHeader"
          >
            <Modal.Header closeButton>
              <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.state.form}
            </Modal.Body>
            <Modal.Footer>

              // Or you can create your own dismiss buttons
              <button className='btn btn-primary' onClick={this.submitAndClose}>
                Save
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

export default TopBar;
