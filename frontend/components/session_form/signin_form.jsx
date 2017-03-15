import React from 'react';
import merge from 'lodash/merge';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  errors() {}

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(merge({}, this.state));
    this.state = { email: "", password: "" };
  }

  render() {
    const { email, password } = this.state;

    return(
      <div>
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

          <label>Enter password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={this.update('password')}>
          </input>
          <br />
          <br />
          
          <input type='submit' value='Sign in'></input>
        </form>

      </div>
    )
  }
}

export default SigninForm;
