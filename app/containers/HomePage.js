// @flow
import { connect } from 'react-redux';

import Home from '../components/Home';
import startAuth from '../utils/auth';

const mapStateToProps = (state) => ({
  loading: state.loading,
  tokens: state.tokens,
});

const mapDispatchToProps = dispatch => ({
  onLogin: async () => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const tokens = await startAuth();
      dispatch({ type: 'LOGIN_END' });
      dispatch({ type: 'SET_TOKENS', payload: { tokens } });
    } catch (e) {
      console.error(e);
      dispatch({ type: 'LOGIN_END' });
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
