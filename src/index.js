import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';
import App from './app/app';
import store from './app/redux/store';
import AlertContainer from './app/common/components/AlertContainer';

ReactDOM.render(
  <Provider store={store}>
    <AlertContainer />
    <Favicon url="https://raw.githubusercontent.com/maksim-karatkevich/tel-app/master/favicon.ico" />
    <App />
  </Provider>,
  document.getElementById('root')
);
