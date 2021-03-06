import { connect } from 'react-redux';
import { withRouter } from "react-router";

import SigninForm from './signin_form';
import { login } from './../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SigninForm))
