import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import loading from './loading';
import tokens from './tokens';
import feedItems from './feedItems';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    loading,
    tokens,
    feedItems
  });
}
