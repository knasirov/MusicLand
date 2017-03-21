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
      audioUrl: null
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

      if (file) {
        fileReader.readAsDataURL(file);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

  }

  render() {
    const { title, description } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>
            <input type="file" onChange={this.updateImage} />
            Choose file
          </button>
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
