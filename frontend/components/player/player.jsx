import React from 'react';
import { Link } from 'react-router';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.pressPlay = this.pressPlay.bind(this);
    this.stepBackwards = this.stepBackwards.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  componentDidMount() {
    this.audio = document.getElementById('audio-tag');
    this.progressBar = document.getElementById('progress-bar');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTrack.id !== nextProps.currentTrack.id) {
      this.audio.src = nextProps.currentTrack.audio_url;
      this.audio.play();
      this.props.updateStatus(true);
    }
    if (this.props.currentTrack.isPlaying !== nextProps.currentTrack.isPlaying) {
      this.pressPlay()
    }
  }

  pressPlay() {
    if (!this.audio.currentSrc) {
      return
    }
    if (this.props.currentTrack.isPlaying) {
      this.audio.pause();
      this.props.updateStatus(false);
    } else {
      this.audio.play();
      this.props.updateStatus(true);
    }
  }

  stepBackwards() {
    this.audio.currentTime = this.audio.currentTime - 15;
  }

  stepForward() {
    this.audio.currentTime = this.audio.currentTime + 15;
  }

  updateTimer() {
    if (!(this.audio.currentTime && this.audio.duration)) { return }
    this.progressBar.value = this.audio.currentTime/this.audio.duration;
    this.forceUpdate();
  }

  updatePlayer(e) {
    e.preventDefault();
    if (!(this.audio.currentTime && this.audio.duration)) { return }
    let percent = (e.clientX - this.progressBar.offsetLeft) / this.progressBar.offsetWidth
    this.audio.currentTime = this.audio.duration * percent
  }

  render() {
    let playPause = (<i className="fa fa-play" aria-hidden="true"></i>)
    if (this.props.currentTrack.isPlaying) {
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

            <div className='clickable-bar' onClick={this.updatePlayer}>
              <progress id='progress-bar' value='0'></progress>
            </div>

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

          <audio id='audio-tag' loop='true' onTimeUpdate={this.updateTimer}>
            <source src={audio_url}></source>
          </audio>
        </div>
      </div>
    )
  }
}

export default Player;
