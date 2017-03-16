import React from 'react';

import TopBarContainer from './top_bar/top_bar_container';

const App = ({ children }) => (
  <div className="window">
    <TopBarContainer/>
    <div className="main-content">
      <div className="img"/>
      {children}
    </div>
  </div>
);

export default App;
