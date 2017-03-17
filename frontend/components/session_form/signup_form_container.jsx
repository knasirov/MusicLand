import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import SignupForm from './signup_form';
import { signup } from './../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignupForm))
