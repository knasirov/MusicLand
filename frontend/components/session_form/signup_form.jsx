import React from 'react';
import merge from 'lodash/merge';

import { uniqueId } from '../../util/utils';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  errors() {
    const { errors } = this.props;
    if (errors.length > 0) {
      return errors.map( (error, idx) => <li key={uniqueId() + idx}>{error}</li>);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(merge({}, this.state));
    this.state = { email: "", username: "", password: "" };
  }

  render() {
    const { email, username, password } = this.state;

    return(
      <div>
        <h3>Create your MusicLand account</h3>

        <ul>{this.errors()}</ul>

        <form onSubmit={this.handleSubmit}>
          <label>Enter your email address</label>
          <br />
          <input
            value={email}
            onChange={this.update('email')}>
          </input>
          <br />
          <br />

          <label>Choose a username</label>
          <br />
          <input
            value={username}
            onChange={this.update('username')}>
          </input>
          <br />
          <br />

          <label>Choose a password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={this.update('password')}>
          </input>
          <br />
          <br />

          <input type='submit' value='Continue'></input>
        </form>

      </div>
    )
  }
}

export default SignupForm;
