// @flow
import React, { Component } from 'react';
import type { FeedItem as FeedItemPropsType } from '../types/FeedItem';
import FeedItem from './FeedItem';

type Props = {
  feedItems: Array<FeedItemPropsType>,
  onMount: () => void
};

export default class Feed extends Component<Props> {
  static defaultProps = {
    feedItems: [],
  };

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="slds-feed">
        <ul className="slds-feed__list">
          {this.props.feedItems.map(feedItem => {
            return <FeedItem item={feedItem} tokens={this.props.tokens}/>;
          })}
        </ul>
      </div>
    );
  }
}
