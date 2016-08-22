import { combineReducers } from 'redux';
import { filterCatalog } from '../containers/FilterBox/reducers';
import { reducer as formReducer } from 'redux-form'


export default function createReducer(asyncReducers) {
  return combineReducers({
    form: formReducer,
    catalog: filterCatalog
  });
}
