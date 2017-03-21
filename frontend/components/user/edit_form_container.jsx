import { connect } from 'react-redux';

import EditForm from './edit_form';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  username: ownProps.username,
  location: ownProps.location,
  imageUrl: ownProps.image_url,
  errors: ownProps.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: formData => dispatch(updateUser(formData)),
  closeModal: () => ownProps.closeModal()
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
