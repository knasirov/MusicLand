import React from 'react';
import merge from 'lodash/merge';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageFile: null,
      imageUrl: null,
      audioFile: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  updateImage() {
    return e => {
      let file = e.currentTarget.files[0];
      let fileReader = new FileReader();
      fileReader.onloadend = () => (
        this.setState({ imageFile: file, imageUrl: fileReader.result })
      );

      if (file) { fileReader.readAsDataURL(file); }
    }
  }

  updateAudio(e) {
    this.setState({ audioFile: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      document.getElementById('signin').click();
      return;
    }

    const { title, description, imageFile, audioFile } = this.state;
    let formData = new FormData();
    formData.append('track[title]', title);
    formData.append('track[description]', description);
    formData.append('track[user_id]', this.props.currentUser.id);
    formData.append('track[file]', audioFile);
    if (imageFile) {
      formData.append('track[image]', imageFile);
    }

    this.props.createTrack(formData).then(res => this.props.router.push(`/users/${res.track.user_id}`))
  }

  render() {
    const { title, description, imageUrl, audioFile } = this.state;

    let fileLabel = "Choose a file to upload"
    let form2;

    if (audioFile) {
      fileLabel = audioFile.name;

      form2 = (
        <div className='form2'>
          <div className='upload-img-preview'>
            <img src={imageUrl} />
            <div className='upload-img-btn'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              <label>
                <input type="file" onChange={this.updateImage()} className='file-input'/>
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
        </div>
      )
    }

    return(
      <div className='upload-main'>
        <form onSubmit={this.handleSubmit} className='upload-form'>
          <div className='form1'>
            <label className="audio-label">
              <input type="file" onChange={this.updateAudio} className='file-input'/>
              {fileLabel}
            </label>
          </div>

          {form2}
        </form>
      </div>
    )
  }
}

export default Upload;
