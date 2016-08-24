import { CHANGE_FILTER, CHANGES_FILTER } from './constants';

export function changeFilter(name, value) {

  return {
    type : CHANGE_FILTER,
    name,
    value
  }
}

export function changesFilter(filter) {
  return {
    type : CHANGES_FILTER,
    filter
  }
}
