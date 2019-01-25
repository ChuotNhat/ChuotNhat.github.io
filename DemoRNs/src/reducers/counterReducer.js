import { fromJS } from 'immutable';
import { INCRE_COUNTER, DECRE_COUNTER } from 'actions/actionTypes';

const initialState = fromJS({
  counter: 0,
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCRE_COUNTER:
      return state.set('counter', state.get('counter') + 1);
    case DECRE_COUNTER:
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
};

export default counterReducer;
