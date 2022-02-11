import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer from './reducers/rootReducer.js';
import rootSaga from './sagas/rootSaga';
// Redux persist
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import omit from 'lodash/omit';
import storage from 'redux-persist/lib/storage';

const blacklistPaths = [
  'redirect',
  'cars',
  'currentUser.error'
]

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: blacklistPaths,
  transforms: [
    // nested blacklist-paths require a custom transform to be applied
    createTransform((inboundState, key) => {
      const blacklistPaths_forKey = blacklistPaths
        .filter((path) => path.startsWith(`${key}.`))
        .map((path) => path.substr(key.length + 1));
      return omit(inboundState, ...blacklistPaths_forKey);
    }, null),
  ],
};

const persistedReducer = persistReducer(persistConfig, createReducer());

/** Store Reducer.
 * @param {Object} initialState - Initial state
 * @return {Object} - return store
 */
export default function configureStore(initialState = []) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return [store, persistor];
}
