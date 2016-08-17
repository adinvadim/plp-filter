import { combineReducers } from 'redux';
import {filterCollection} from '../containers/FilterCollection/reducers';
import { reducer as formReducer } from 'redux-form'


export default function createReducer(asyncReducers) {
  return combineReducers({
    form: formReducer,
    filterCollection,
    ...asyncReducers
  });
}
