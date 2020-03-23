export default function feedItemsReducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCH_FEED_ITEMS':
      return action.payload;
    default:
      return state;
  }
}
