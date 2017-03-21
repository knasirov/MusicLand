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

  updateAudio() {
    return e => this.setState({ audioFile: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, description, imageFile, audioFile } = this.state;
    let formData = new FormData();
    formData.append('track[title]', title);
    formData.append('track[description]', description);
    formData.append('track[user_id]', this.props.userId);
    formData.append('track[file]', audioFile);
    if (imageFile) {
      formData.append('track[image]', imageFile);
    }
    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]);
    // }
    this.props.createTrack(formData).then(res => console.log(res))
  }

  render() {
    const { title, description, imageUrl } = this.state;

    return(
      <div className='upload-main'>
        <form onSubmit={this.handleSubmit}>
          <label className="input-label">
            <input type="file" onChange={this.updateAudio()} className='file-input'/>
            Choose a file to upload
          </label>
          <br />

          <label className="input-label">
            <input type="file" onChange={this.updateImage()} className='file-input'/>
            Choose image
          </label>
          <img src={imageUrl} />
          <br />

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
        </form>
      </div>
    )
  }
}

export default Upload;
