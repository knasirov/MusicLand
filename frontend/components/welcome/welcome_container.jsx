import { connect } from 'react-redux';

import Welcome from './welcome';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser //placeholder
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()) //placeholder
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)
