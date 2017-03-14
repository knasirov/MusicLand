import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser, logout } = this.props;

    if (currentUser) {
      return (
        <div>
          <span>Welcome, {currentUser.username}</span>
          <button>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button>Sign in</button>
          <button>Create account</button>
        </div>
      );
    }
  }
}

export default Greeting;
