/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import store from './store';
import AppNavigator from './config/navigations';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
