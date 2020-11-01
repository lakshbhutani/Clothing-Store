import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'

import { fetchCollectionStart } from './shop/shop.saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware(); // This can take an object with some confg settings on it.

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

export const store = createStore(rootReducer, applyMiddleware(...middlewares))


sagaMiddleware.run(fetchCollectionStart)

export const persistor = persistStore(store)

// export default { store, persistor };