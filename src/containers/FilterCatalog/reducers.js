import { REQUEST_ITEMS, RECEIVE_ITEMS } from './constants';


export function filterCatalog(state={
  items : [],
  isFetching : false,
  collections : []
}, action) {

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


