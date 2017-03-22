import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

let preloadedState = {};
if (window.currentUser) {
  preloadedState = { session: { currentUser: window.currentUser } };
}
const store = configureStore(preloadedState);

window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});
