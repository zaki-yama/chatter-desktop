import { FeedItem } from './../types';

// eslint-disable-next-line default-param-last
export default function feedItemsReducer(state: FeedItem[] = [], action: any) {
  switch (action.type) {
    case 'FETCH_FEED_ITEMS':
      return action.payload;
    default:
      return state;
  }
}
