import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncLocalStorage } from 'redux-persist/storages';

export default function configureStore(initialState={}) {
  const store = compose(
    autoRehydrate())(createStore)(rootReducer, initialState, applyMiddleware(thunk)
  );

  persistStore(store, {
    storage: asyncLocalStorage
  });

  return store
}