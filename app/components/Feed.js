// @flow
import React, { Component } from 'react';
import { Spinner as ReactLDSSpinner } from 'react-lightning-design-system';
import type { FeedItem as FeedItemPropsType } from '../types/FeedItem';
import FeedItem from './FeedItem';

type Props = {
  feedItems: Array<FeedItemPropsType>,
  loading: boolean,
  onMount: () => void
};

function Spinner() {
  return (
    <div style={{ width: 100, height: 100, zIndex: 1000 }}>
      <ReactLDSSpinner type="brand" size="large" />
    </div>
  );
}

export default class Feed extends Component<Props> {
  static defaultProps = {
    loading: false,
    feedItems: [],
  };

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <div className="slds-feed">
          <ul className="slds-feed__list">
            {this.props.feedItems.map(feedItem => {
              return <FeedItem item={feedItem} tokens={this.props.tokens}/>;
            })}
          </ul>
        </div>
        {this.props.loading ? <Spinner /> : null}
      </div>
    );
  }
}
