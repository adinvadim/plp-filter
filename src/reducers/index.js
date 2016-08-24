import { combineReducers } from 'redux';
import { filterCatalog } from 'containers/FilterCatalog/reducers';


export default function createReducer(asyncReducers) {
  return combineReducers({
    catalog: filterCatalog
  });
}
