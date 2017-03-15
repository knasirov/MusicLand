import React from 'react';

import TopBarContainer from './top_bar/top_bar_container';

const App = ({ children }) => (
  <div>
    <TopBarContainer />
    <h1 id="app.jsx">from App.jsx</h1>
    {children}
  </div>
);

export default App;
