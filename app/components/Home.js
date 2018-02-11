// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Home.css';
import { Button } from 'react-lightning-design-system';

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
            <Button
              type="neutral"
              onClick={this.props.loading ? undefined : this.props.onLogin}
              disabled={this.props.loading}
            >
                Login
            </Button>
        }
      </div>
    );
  }
}
