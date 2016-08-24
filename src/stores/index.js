import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from '../reducers';

import createLogger from 'redux-logger';

const logger = createLogger({ collapsed : true })


export default function configureStore(initialState) {
  const store = createStore(
      createReducer(),
      initialState,
      compose(
        applyMiddleware( thunk, logger,),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
  )
  store.asyncReducers = {}

  return store
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
