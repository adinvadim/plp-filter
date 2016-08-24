import { REQUEST_ITEMS, RECEIVE_ITEMS } from './constants';
import { filterItems } from './utils';
import { filter } from 'containers/Filter/reducers';



export function filterCatalog(state={
  items : [],
  isFetching : false,
  collections : [],
  filter: {}
}, action) {

  state = {
    ...state,
    filter : filter(state.filter, action)
  }

  switch(action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        isFetching : false,
        items : action.items,
        collections : state.collections.map(item => {
          return {
            ...item,
            items : filterItems(action.items, item.filter)
          }
        })
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


