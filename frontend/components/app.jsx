import React from 'react';

import TopBarContainer from './top_bar/top_bar_container';
import PlayerContainer from './player/player_container';

const App = ({ children }) => (
  <div className="window">
    <TopBarContainer/>

    <div className="main-content">
      {children}
    </div>

    <PlayerContainer />
  </div>
);

export default App;
