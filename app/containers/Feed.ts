// @ts-nocheck
import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { fetchMyFeed } from '../api';

const mapStateToProps = state => ({
  feedItems: state.feedItems,
  instanceUrl: state.tokens.instanceUrl,
  loading: state.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount: async () => {
    dispatch({ type: 'LOADING_START' });
    const feedItems = await fetchMyFeed(ownProps.tokens);
    dispatch({ type: 'FETCH_FEED_ITEMS', payload: feedItems });
    dispatch({ type: 'LOADING_END' });
  },

  tick: async () => {
    dispatch({ type: 'LOADING_START' });
    const feedItems = await fetchMyFeed(ownProps.tokens);
    dispatch({ type: 'FETCH_FEED_ITEMS', payload: feedItems });
    dispatch({ type: 'LOADING_END' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
