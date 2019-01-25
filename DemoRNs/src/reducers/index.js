import { combineReducers } from 'redux';
import NavigationReducer from './navigationReducer';
import CounterReducer from './counterReducer';
import handleCart from './handleCart';

const AppReducer = combineReducers({
  nav: NavigationReducer,
  CounterReducer,
  handleCart,
});

export default AppReducer;
