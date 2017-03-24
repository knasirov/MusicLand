import React from 'react';

class EditTrackForm extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description, imageUrl } = this.props;
    this.state= {
      id: id,
      title: title,
      description: description,
      imageFile: null,
      imageUrl: imageUrl,

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  updateImage(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => (
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    );

    if (file) { fileReader.readAsDataURL(file); }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, imageFile } = this.state;
    let formData = new FormData();
    formData.append('track[id]', this.props.currentUser.id);
    formData.append('track[title]', title);
    formData.append('track[description]', description);
    if (imageFile) {
      formData.append('track[image]', imageFile);
    }
    for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]);
}

    this.props.updateTrack(formData).then(res => console.log(res)).then(() => this.props.closeModal())
  }

  render() {
    const { title, description, imageUrl } = this.state;

    return (
      <div>
        <form className='edit-track-form' onSubmit={this.handleSubmit}>
          <div className='upload-img-preview'>
            <img src={imageUrl} />
            <div className='upload-img-btn'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              <label>
                <input type="file" onChange={this.updateImage} className='file-input'/>
                Choose image
              </label>
            </div>
          </div>

          <div className='upload-detail-input'>
            <label>Title<i className="red">*</i></label>
            <input
              value={title}
              placeholder="Name your track"
              onChange={this.update('title')}>
            </input>
            <br />

            <label>Description</label>
            <input
              value={description}
              placeholder="Descirbe your track"
              onChange={this.update('description')}>
            </input>
            <br />

            <input type="submit" value="Save"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default EditTrackForm;
