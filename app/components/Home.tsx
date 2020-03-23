// @ts-nocheck
import React, { Component } from 'react';
import { Button, Icon } from 'react-lightning-design-system';
import Feed from '../containers/Feed';

type Props = {
  loading: boolean;
  tokens: Record<string, any>;
  onClickLogin: () => void;
};

export default class Home extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.tokens ? (
          <Feed tokens={this.props.tokens} />
        ) : (
          <div className="slds-m-top_large slds-m-horizontal_large">
            <div className="slds-grid slds-wrap">
              <div className="slds-col">
                <div className="slds-text-heading_large slds-text-align_center">
                  Chatter Desktop
                </div>
              </div>
              <div className="slds-col slds-size--1-of-1 slds-align_absolute-center slds-m-vertical_large">
                <Icon category="standard" icon="feed" size="large" />
              </div>
              <div className="slds-col slds-size--1-of-1 slds-align_absolute-center">
                <Button
                  type="neutral"
                  onClick={
                    this.props.loading ? undefined : this.props.onClickLogin
                  }
                  disabled={this.props.loading}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
