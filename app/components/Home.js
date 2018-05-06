// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-lightning-design-system';
import Feed from '../containers/Feed';

type Props = {
  loading: boolean,
  tokens: Object,
  onClickLogin: (SyntheticEvent<>) => void,
};

export default class Home extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.tokens ? (
          <Feed tokens={this.props.tokens} />
        ) : (
          <Button
            type="neutral"
            onClick={this.props.loading ? undefined : this.props.onClickLogin}
            disabled={this.props.loading}
          >
            Login
          </Button>
        )}
      </div>
    );
  }
}
