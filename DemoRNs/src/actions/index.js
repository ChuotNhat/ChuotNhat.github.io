import { INCRE_COUNTER, DECRE_COUNTER, ADD_CART, DELETE_CART } from './actionTypes';

export const incrementAction = () => ({
  type: INCRE_COUNTER,
});

export const decrementAction = () => ({
  type: DECRE_COUNTER,
});

export const addCart = item => ({
  type: ADD_CART,
  item,
});

export const deleteCart = item => ({
  type: DELETE_CART,
  item,
});
