import { REQUEST_ITEMS, RECEIVE_ITEM } from './constants';

const filterItems = (items, values={}) => {
  let result = items;
  if (values.new) {
    result = result.filter( item => item.new )
  }
  if (values.type && values.type.length > 0) {
    result = result.filter(item => values.type.indexOf(item.type) != -1)
  }

  if(values.q) {
    result = result.filter(item => item.title.indexOf(values.q) != -1)
  }
  return result;
}


export function filterCatalog(state={
  items : [],
  isFetching : false,
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


