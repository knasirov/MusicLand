import React from 'react';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const { username, location, imageUrl, errors } = this.props;
    this.state = {
      username: username,
      location: `${location || ""}`,
      imageFile: null,
      imageUrl: `${imageUrl || ""}`,
      errors: errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  updateImage() {
    return e => {
      let file = e.currentTarget.files[0];
      let fileReader = new FileReader();
      fileReader.onloadend = () => (this.setState({ imageFile: file, imageUrl: fileReader.result }));

      if (file) { fileReader.readAsDataURL(file) };
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, location, imageFile } = this.state;
    let formData = new FormData();
    formData.append('user[id]', this.props.id);
    formData.append('user[username]', username);
    formData.append('user[location]', location);
    if (imageFile) {
      formData.append('user[image]', imageFile);
    }
    this.props.updateUser(formData).then(this.props.closeModal());
  };

  render() {
    const { username, location, imageUrl, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='edit-form'>
          <div className='edit-form-img'>
            <img src={imageUrl} />
            <input type="file" onChange={this.updateImage()}></input>
          </div>

          <div className='edit-form-input'>
            <label>User name</label>
            <input
              value={username}
              onChange={ this.update('username') }>
            </input>

            <label>Location</label>
            <input
              value={location}
              onChange={ this.update('location') }>
            </input>

            <input type='submit' value="Save changes"/>
          </div>
        </form>
      </div>
    )
  }
}
export default EditForm;
