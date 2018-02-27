// @flow
import { connect } from 'react-redux';
import storage from 'electron-json-storage';

import Home from '../components/Home';
import startAuth from '../utils/auth';

const mapStateToProps = (state) => ({
  loading: state.loading,
  tokens: state.tokens,
});

const mapDispatchToProps = dispatch => ({
  onClickLogin: async () => {
    dispatch({ type: 'LOGIN_START' });
    try {
      console.log(storage.getDefaultDataPath());
      let tokens = await new Promise((resolve, reject) => {
        storage.get('tokens', (err, data) => {
          if (err) {
            console.log('err', err);
            reject(err);
          } else {
            console.log('Use stored tokens', data);
            resolve(data);
          }
        });
      });
      if (Object.keys(tokens).length === 0) {
        tokens = await startAuth();
        await new Promise((resolve, reject) => {
          storage.set('tokens', tokens, (err) => {
            if (err) {
              console.log('Failed to save tokens to localStorage', err);
              reject(err);
            }
            console.log('Successfully save tokens to', storage.getDataPath(), tokens);
            resolve();
          });
        });
      }
      dispatch({ type: 'LOGIN_END' });
      dispatch({ type: 'SET_TOKENS', payload: { tokens } });
    } catch (e) {
      console.error(e);
      dispatch({ type: 'LOGIN_END' });
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
