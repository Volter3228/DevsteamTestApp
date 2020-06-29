import React from 'react';
import Navigator from './app/routes/mainStack';
import {Provider} from 'react-redux';
import store from './app/redux/store';

/* This is my first React Native App, so
 * don't judge strictly, I'm trying to do
 * my best ;^)
 */
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
