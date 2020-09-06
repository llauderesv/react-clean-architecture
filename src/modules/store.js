// @ts-nocheck
import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducer';
import middlewares, {sagaMiddleware} from './middlewares';
import rootSaga from './sagas';

const storeEnhancer = [...middlewares];

const devToolExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle
// Check if has Redux devtool extension installed on browser...
if (typeof devToolExtension === 'function') {
  storeEnhancer.push(devToolExtension());
}

// Lazy load run saga's since were lazing loading the createStore above!
export const runSagaMiddleware = () => sagaMiddleware.run(rootSaga);

export default initialState => {
  return createStore(
    appReducer,
    initialState,
    applyMiddleware(...storeEnhancer)
  );
};
