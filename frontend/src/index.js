import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reducer from './reducer.js';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
