import 'babel-polyfill';  
import React from 'react';  
import { render } from 'react-dom';  
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';  
//import { Router, browserHistory } from 'react-router';  
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'


const store = configureStore();
export const history = createHistory()

render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);