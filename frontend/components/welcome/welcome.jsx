import React from 'react';

// dont forget to put welcome image back in
// https://s3.amazonaws.com/musicland-dev/home-page/welcome.png


class Welcome extends React.Component {

  render() {
    return(
      <div className="welcome-header">
        <img src="https://s3.amazonaws.com/musicland-dev/home-page/welcome-lq.png"/>
        <h2>Discover thousands of tracks and artists</h2>
      </div>
    )
  }
}

export default Welcome;
