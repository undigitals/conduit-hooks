import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));
