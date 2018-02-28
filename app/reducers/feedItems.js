// @flow
import type { FeedItem } from '../types/FeedItem';

export default function feedItemsReducer(state: Array<FeedItem> = [], action: any) {
  switch (action.type) {
    case 'FETCH_FEED_ITEMS':
      return action.payload;
    default:
      return state;
  }
}
