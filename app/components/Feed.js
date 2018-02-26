// @flow
import React, { Component } from 'react';
import type { FeedItem } from '../types/FeedItem';

type Props = {
  feedItems: Array<FeedItem>,
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
      <div>
        {this.props.feedItems.map(feedItem => {
          return <p>{feedItem.id}</p>;
        })}
      </div>
    );
  }
}
