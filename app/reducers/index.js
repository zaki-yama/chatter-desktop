// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import loading from './loading';
import tokens from './tokens';

const rootReducer = combineReducers({
  counter,
  router,
  loading,
  tokens,
});

export default rootReducer;
