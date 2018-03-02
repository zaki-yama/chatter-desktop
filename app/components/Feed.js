// @flow
import React, { Component } from 'react';
import { Spinner as ReactLDSSpinner } from 'react-lightning-design-system';
import type { FeedItem as FeedItemPropsType } from '../types/FeedItem';
import FeedItem from './FeedItem';

type Props = {
  feedItems: Array<FeedItemPropsType>,
  loading: boolean,
  onMount: () => void,
  tick: () => void
};

function Spinner() {
  return (
    <div style={{ width: 100, height: 100, zIndex: 1000 }}>
      <ReactLDSSpinner type="brand" size="large" />
    </div>
  );
}

const RELOAD_INTERVAL = 15 * 60 * 1000;

export default class Feed extends Component<Props> {
  intervalId: IntervalID;

  static defaultProps = {
    loading: false,
    feedItems: [],
  };

  componentDidMount() {
    this.props.onMount();
    this.intervalId = setInterval(this.props.tick, RELOAD_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <div className="slds-feed">
          <ul className="slds-feed__list">
            {this.props.feedItems.map(feedItem => <FeedItem item={feedItem} key={feedItem.id} />)}
          </ul>
        </div>
        {this.props.loading ? <Spinner /> : null}
      </div>
    );
  }
}
