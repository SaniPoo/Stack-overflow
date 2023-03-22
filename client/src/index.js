import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {legacy_createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers  from './reducers/index.js'


const store = legacy_createStore(Reducers, compose(applyMiddleware(thunk)))

createRoot.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


