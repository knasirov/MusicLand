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

    const { router } = this.props;
    if (router.location.pathname === '/') {
      router.push('/stream');
    }
  }

  render() {
    const { email, username, password } = this.state;

    return(
      <div>
        <h3>Create your MusicLand account</h3>

        <ul>{this.errors()}</ul>

        <form onSubmit={this.handleSubmit} className='signup-form'>
          <label>Enter your email address<i className="red">*</i></label>
          <input
            type='email'
            value={email}
            onChange={this.update('email')}>
          </input>
          <br />

          <label>Choose a username<i className="red">*</i></label>
          <input
            value={username}
            onChange={this.update('username')}>
          </input>
          <br />

          <label>Choose a password<i className="red">*</i></label>
          <input
            type="password"
            value={password}
            onChange={this.update('password')}>
          </input>
          <br />

          <input type='submit' value='Continue'></input>
        </form>

      </div>
    )
  }
}

export default SignupForm;
