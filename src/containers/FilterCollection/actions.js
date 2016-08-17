import 'whatwg-fetch';

import { courseData } from '../../data';

import { REQUEST_ITEMS, RECEIVE_ITEMS } from './constants';



export function requestItems() {
  return {
    type : REQUEST_ITEMS
  }
}

export function receiveItems(json) {
  return {
    type : RECEIVE_ITEMS,
    items : json
  }
}

export function getItems(filter) {

  return function(dispatch) {
    dispatch(requestItems());

    dispatch(receiveItems(courseData));
    //return fetch(`/assets/data.json`)
      //.then(json => {
        //console.log(json);
        ////dispatch(receiveItems(json))
      //})
      //.catch(err => console.log(err))
  }
}
