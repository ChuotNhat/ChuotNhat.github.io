import { fromJS } from 'immutable';
import { ADD_CART, DELETE_CART } from 'actions/actionTypes';

const initialState = fromJS({
  arrayCart: [],
});

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return state.set('cart', state.concat(action.item));
    case DELETE_CART:
      return state.set('cart', state.filter(item => item.id !== action.item.id));
    default:
      return state;
  }
};

export default cartReducer;
