import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/Home';
import ModalScreen from './components/ModalScreen';

import MainScreen from './containers/MainScreen';
import DetailsScreen from './containers/DetailScreen';
import SearchLocation from './components/SearchLocation';

export default createStackNavigator({
  home: HomeScreen,
  main: MainScreen,
  modal: ModalScreen,
  detail: DetailsScreen,
  search: SearchLocation,
});
