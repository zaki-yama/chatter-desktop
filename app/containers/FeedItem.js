// @flow
import { connect } from 'react-redux';
import FeedItem from '../components/FeedItem';

const mapStateToProps = state => ({
  accessToken: state.tokens.accessToken,
});

export default connect(mapStateToProps)(FeedItem);
