import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { AuthProvider } from './hooks/authContext';
import store from './store';

render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>,

  document.getElementById('root')
);
