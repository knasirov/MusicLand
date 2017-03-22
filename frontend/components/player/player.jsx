import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.pressPlay = this.pressPlay.bind(this);
    this.state = { nowPlaying: false }
  }

  componentDidMount() {
    this.audio = document.getElementById('audio-tag');
  }

  pressPlay() {
    if (this.state.nowPlaying) {
      this.audio.pause();
      this.setState({ nowPlaying: false });
    } else {
      this.audio.play();
      this.setState({ nowPlaying: true });
    }
  }

  render() {
    let playPause
    if (this.state.nowPlaying) {
      playPause = (<i className="fa fa-pause" aria-hidden="true"></i>)
    } else {
      playPause = (<i className="fa fa-play" aria-hidden="true"></i>)
    }

    return (
      <div className='extended-player'>
        <div className='player'>
          <div className='player-buttons'>
            <button>
              <i className="fa fa-step-backward" aria-hidden="true"></i>
            </button>
            <button onClick={this.pressPlay}>
              {playPause}
            </button>
            <button>
              <i className="fa fa-step-forward" aria-hidden="true"></i>
            </button>
          </div>

          <div className='progress-bar'>

          </div>

          <div className='player-track-detail'>
            
          </div>

          <audio id='audio-tag'>
            <source src='https://s3.amazonaws.com/musicland-dev/tracks/files/000/000/001/original/pink_panther.mp3'></source>
          </audio>
        </div>
      </div>
    )
  }
}

export default Player;
