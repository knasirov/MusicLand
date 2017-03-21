import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import WelcomeContainer from './welcome/welcome_container';
import StreamContainer from './stream/stream_container';
import UploadContainer from './upload/upload_container';
import UserContainer from './user/user_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (!!store.getState().session.currentUser) {
      replace('/stream');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ WelcomeContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/stream" component={ StreamContainer } />
          <Route path='/upload' component={ UploadContainer } />
          <Route path='/users/:userId' component={ UserContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
