// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import loading from './loading';
import tokens from './tokens';
import feedItems from './feedItems';

const rootReducer = combineReducers({
  router,
  loading,
  tokens,
  feedItems,
});

export default rootReducer;
