// @ts-nocheck
import React, { Component } from 'react';
import { Spinner as ReactLDSSpinner } from 'react-lightning-design-system';
// import type { FeedItem as FeedItemPropsType } from '../types/FeedItem';
import FeedItem from '../containers/FeedItem';

type Props = {
  feedItems: any,
  instanceUrl: string,
  loading: boolean,
  onMount: () => void,
  tick: () => void,
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
            {this.props.feedItems.map(feedItem => (
              <FeedItem
                key={feedItem.id}
                item={feedItem}
                instanceUrl={this.props.instanceUrl}
              />
            ))}
          </ul>
        </div>
        {this.props.loading ? <Spinner /> : null}
      </div>
    );
  }
}
