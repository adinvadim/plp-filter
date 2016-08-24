import { CHANGE_FILTER, CHANGES_FILTER } from './constants';


export function filter(state={}, action) {
  switch(action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        [action.name] : action.value
      }
    case CHANGES_FILTER:
      return {
        ...state,
        ...action.filter
      }
    default:
      return state;
  }
}
