import React from 'react';
import { Link } from 'react-router';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nowPlaying: false };
    this.pressPlay = this.pressPlay.bind(this);
    this.stepBackwards = this.stepBackwards.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  componentDidMount() {
    this.audio = document.getElementById('audio-tag');
    this.progressBar = document.getElementById('progress-bar');
  }

  componentWillReceiveProps(nextProps) {
    this.audio.src = nextProps.currentTrack.audio_url;
    this.audio.play();
    this.setState({ nowPlaying: true });
  }

  pressPlay() {
    if (!this.audio.currentSrc) {
      return
    }
    if (this.state.nowPlaying) {
      this.audio.pause();
      this.setState({ nowPlaying: false });
    } else {
      this.audio.play();
      this.setState({ nowPlaying: true });
    }
  }

  stepBackwards() {
    this.audio.currentTime = this.audio.currentTime - 15;
  }

  stepForward() {
    this.audio.currentTime = this.audio.currentTime + 15;
  }

  updatePlayer() {
    if (!(this.audio.currentTime && this.audio.duration)) { return }
    this.progressBar.value = this.audio.currentTime/this.audio.duration;
    this.forceUpdate();
  }

  render() {
    let playPause = (<i className="fa fa-play" aria-hidden="true"></i>)
    if (this.state.nowPlaying) {
      playPause = (<i className="fa fa-pause" aria-hidden="true"></i>)
    }

    const convertTime = function(t) {
      if (t % 60 < 10) {
        return `${Math.floor(t/60)}:0${Math.floor(t % 60)}`
      } else {
        return `${Math.floor(t/60)}:${Math.floor(t % 60)}`
      }
    }

    let currentTime, duration;
    if (this.audio && this.audio.duration) {
      currentTime = convertTime(this.audio.currentTime);
      duration = convertTime(this.audio.duration);
    } else {
      currentTime = '0:00';
      duration = '0:00';
    }

    const { id, title, user_id, user_name, image_url, audio_url } = this.props.currentTrack;

    return (
      <div className='extended-player'>
        <div className='player'>
          <div className='player-buttons'>
            <button onClick={this.stepBackwards}>
              <i className="fa fa-step-backward" aria-hidden="true"></i>
            </button>
            <button onClick={this.pressPlay}>
              {playPause}
            </button>
            <button onClick={this.stepForward}>
              <i className="fa fa-step-forward" aria-hidden="true"></i>
            </button>
          </div>

          <div className='progress-bar'>
            <span>{currentTime}</span>

            <progress id='progress-bar' value='0'>
            </progress>

            <span>{duration}</span>
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

          <audio id='audio-tag' loop='true' onTimeUpdate={this.updatePlayer}>
            <source src={audio_url}></source>
          </audio>
        </div>
      </div>
    )
  }
}

export default Player;
