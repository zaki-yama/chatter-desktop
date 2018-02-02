// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import loading from './loading';
import tokens from './tokens';

const rootReducer = combineReducers({
  router,
  loading,
  tokens,
});

export default rootReducer;
