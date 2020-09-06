// @ts-nocheck
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import appReducer from './reducer';
import middlewares, {sagaMiddleware} from './middlewares';
import rootSaga from './sagas';

const storeEnhancer = [...middlewares];
const composeEnhancer = composeWithDevTools({});

// Lazy load run saga's since were lazing loading the createStore above!
export const runSagaMiddleware = () => sagaMiddleware.run(rootSaga);

export default initialState => {
  return createStore(
    appReducer,
    initialState,
    composeEnhancer(applyMiddleware(...storeEnhancer))
  );
};
