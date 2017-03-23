import React from 'react';
import { Link } from 'react-router';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.pressPlay = this.pressPlay.bind(this);
    this.state = { nowPlaying: false }
  }

  componentDidMount() {
    this.audio = document.getElementById('audio-tag');
  }

  componentWillReceiveProps(nextProps) {
    this.audio.src = nextProps.currentTrack.audio_url;
    this.audio.play();
    this.setState({ nowPlaying: true });
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

    const { id, title, user_id, user_name, image_url, audio_url } = this.props.currentTrack;

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
            <div className='player-img'>
              <img src={image_url} />
            </div>

            <div className='player-info'>
              <Link to={`/users/${user_id}`} className="player-user">{user_name}</Link>
              <Link to={`/tracks/${id}`} className="player-track">{title}</Link>
            </div>
          </div>

          <audio id='audio-tag'>
            <source src={audio_url}></source>
          </audio>
        </div>
      </div>
    )
  }
}

export default Player;
