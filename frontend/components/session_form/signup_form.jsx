import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  errors() {}

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {}

  render() {
    const { email, username, password } = this.state;

    return(
      <div>
        <h3>Create your MusicLand account</h3>

        <ul>{this.errors()}</ul>

        <form onSubmit={this.handleSubmit}>
          <label>Enter your email address</label>
          <input
            value={email}
            onChange={this.update('email')}>
          </input>

          <label>Choose a username</label>
          <input
            value={username}
            onChange={this.update('username')}>
          </input>

          <label>Choose a password</label>
          <input
            type="password"
            value={password}
            onChange={this.update('password')}>
          </input>

          <input type='submit' value='Continue'></input>
        </form>

      </div>
    )
  }
}

export default SignupForm;
