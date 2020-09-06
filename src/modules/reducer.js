import {combineReducers} from 'redux';
import authorization from './authorization';

const appReducer = combineReducers({
  /** Place all your reducer here... */
  authorization,
});

export default appReducer;
