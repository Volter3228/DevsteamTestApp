import React from 'react';
import Navigator from './app/routes/mainStack';
import {Provider} from 'react-redux';
import store from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
