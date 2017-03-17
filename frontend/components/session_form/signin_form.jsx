import React from 'react';
import merge from 'lodash/merge';

import { uniqueId } from '../../util/utils';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    this.props.signin(merge({}, this.state));
    this.state = { email: "", password: "" };

    const { router } = this.props;
    if ( router.location.pathname === '/') {
      router.push('/stream');
    }
  }

  render() {
    const { email, password } = this.state;

    return(
      <div>
        <ul>{this.errors()}</ul>

        <form onSubmit={this.handleSubmit} className='signin-form'>
          <label>Enter your email address</label>
          <input
            type='email'
            value={email}
            onChange={this.update('email')}>
          </input>
          <br />

          <label>Enter your password</label>
          <input
            type="password"
            value={password}
            onChange={this.update('password')}>
          </input>
          <br />

          <input type='submit' value='Sign in'></input>
        </form>

      </div>
    )
  }
}

export default SigninForm;
