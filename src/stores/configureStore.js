import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {logger} from 'redux-logger';

function configureStore() {
  let store = null;

  if (process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer, applyMiddleware(thunk));
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  } else {
    store = createStore(rootReducer, applyMiddleware(thunk, logger));
  }

  return store;
}

export default configureStore;
