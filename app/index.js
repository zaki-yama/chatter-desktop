import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { util } from 'react-lightning-design-system';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

util.setAssetRoot('vendor/lds');
const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
