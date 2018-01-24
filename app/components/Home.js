// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Home.css';

type Props = {
  loading: boolean,
  tokens: Object,
  onLogin: SyntheticEvent => void,
};

export default class Home extends Component<Props> {
  render() {
    return (
      <div>
        {
          this.props.tokens ?
            <ul>
              <li>Access Token: <span>{ this.props.tokens.access_token }</span></li>
              <li>Refresh Token: <span>{ this.props.tokens.refresh_token }</span></li>
              <li>Instance URL: <span>{ this.props.tokens.instance_url }</span></li>
            </ul> :
            <button
              onClick={this.props.loading ? undefined : this.props.onLogin}
              disabled={this.props.loading}
            >
                Login
            </button>
        }
      </div>
    );
  }
}
