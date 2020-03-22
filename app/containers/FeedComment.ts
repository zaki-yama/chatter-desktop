import { connect } from 'react-redux';
import FeedComment from '../components/FeedComment';

const mapStateToProps = state => ({
  accessToken: state.tokens.accessToken,
});

export default connect(mapStateToProps)(FeedComment);
