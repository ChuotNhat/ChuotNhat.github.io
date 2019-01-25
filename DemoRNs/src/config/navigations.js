import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { connect } from 'react-redux';

import HomeScreen from 'components/Home';
import ModalScreen from 'components/ModalScreen';

import MainScreen from 'containers/MainScreen';
import DetailsScreen from 'containers/DetailScreen';
import SearchLocation from 'components/SearchLocation';
import Header from 'components/Header';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const stackNavigator = createStackNavigator(
  {
    home: HomeScreen,
    main: MainScreen,
    modal: ModalScreen,
    detail: DetailsScreen,
    search: SearchLocation,
  },
  {
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },
);

const RootNavigator = createDrawerNavigator({
  home: stackNavigator,
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, middleware };
export default AppNavigator;
