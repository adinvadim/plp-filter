import { REQUEST_ITEMS, RECEIVE_ITEMS } from './constants';

export function filterCollection(state={
  items : [],
  isFetching : false,
}, action) {

  state = {
    ...state,
  };
  switch(action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        isFetching : false,
        items : action.items
      };
    case REQUEST_ITEMS:
      return {
        ...state,
        isFetching : true
      };
    default:
      return state;
  }
}

