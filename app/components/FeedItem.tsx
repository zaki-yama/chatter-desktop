import React, { Component, useState } from 'react';
import { Button, Icon } from 'react-lightning-design-system';

import { parseFeedItemBody } from '../utils/bodyParser';

import FeedComment from '../containers/FeedComment';

const DEFAULT_COMMENT_SIZE = 1;

type Props = {
  item: any;
  instanceUrl: string;
  accessToken: string;
};

type HeaderProps = {
  id: string;
  instanceUrl: string;
  photoUrl: string;
  name: string;
  actorId: string;
  relativeCreatedDate: string;
};

function Header(props: HeaderProps) {
  return (
    <header className="slds-post__header slds-media">
      <div className="slds-media__figure">
        <a
          className="slds-avatar slds-avatar_circle slds-avatar_large"
          href={`${props.instanceUrl}/${props.actorId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={props.name}
            src={props.photoUrl}
            title={`${props.name} avatar`}
          />
        </a>
      </div>
      <div className="slds-media__body">
        <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
          <p>
            <a
              href={`${props.instanceUrl}/${props.actorId}`}
              target="_blank"
              title={props.name}
              rel="noopener noreferrer"
            >
              {props.name}
            </a>
          </p>
          <button
            className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
            aria-haspopup="true"
            title="More Options"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
              />
            </svg>
            <span className="slds-assistive-text">More Options</span>
          </button>
        </div>
        <p className="slds-text-body_small">
          <a
            className="slds-text-color_weak"
            href={`${props.instanceUrl}/${props.id}`}
            target="_blank"
            title="Click for single-item view of this post"
            rel="noopener noreferrer"
          >
            {props.relativeCreatedDate}
          </a>
        </p>
      </div>
    </header>
  );
}

type ContentProps = {
  text?: string;
};

function Content(props: ContentProps) {
  return (
    <div
      className="slds-post__content slds-text-longform"
      dangerouslySetInnerHTML={{ __html: props.text }}
    />
  );
}

function Footer() {
  return (
    <footer className="slds-post__footer">
      <ul className="slds-post__footer-actions-list slds-list_horizontal">
        <li className="slds-col slds-item slds-m-right_medium">
          <Button
            title="Like this item"
            className="slds-button_reset slds-post__footer-action"
            aria-pressed="false"
          >
            <Icon
              category="utility"
              icon="like"
              size="x-small"
              className="slds-icon-text-default slds-align-middle"
            />
            Like
          </Button>
        </li>
        <li className="slds-col slds-item slds-m-right_medium">
          <Button
            title="Comment on this item"
            className="slds-button_reset slds-post__footer-action"
          >
            <Icon
              category="utility"
              icon="share_post"
              size="x-small"
              className="slds-icon-text-default slds-align-middle"
            />
            Comment
          </Button>
        </li>
        <li className="slds-col slds-item slds-m-right_medium">
          <Button
            title="Share this item"
            className="slds-button_reset slds-post__footer-action"
          >
            <Icon
              category="utility"
              icon="share"
              size="x-small"
              className="slds-icon-text-default slds-align-middle"
            />
            Share
          </Button>
        </li>
      </ul>
    </footer>
  );
}

type CommentProps = {
  items: any;
  instanceUrl: string;
};

function Comment(props: CommentProps) {
  const [showsAllComments, show] = useState(false);
  if (props.items.length > DEFAULT_COMMENT_SIZE && !showsAllComments) {
    return (
      <div className="slds-feed__item-comments">
        <div className="slds-p-horizontal_medium slds-p-vertical_x-small slds-grid">
          <button
            className="slds-button_reset slds-text-link"
            onClick={() => show(true)}
          >
            More comments
          </button>
          <span className="slds-text-body_small slds-col_bump-left">
            {DEFAULT_COMMENT_SIZE} of {props.items.length}
          </span>
        </div>
        <ul>
          {props.items.map(
            (feedComment, index) =>
              index <= DEFAULT_COMMENT_SIZE - 1 && (
                <li key={feedComment.id}>
                  <FeedComment
                    item={feedComment}
                    instanceUrl={props.instanceUrl}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
  return (
    <div className="slds-feed__item-comments">
      <ul>
        {props.items.map(feedComment => (
          <li key={feedComment.id}>
            <FeedComment item={feedComment} instanceUrl={props.instanceUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
export default class FeedItem extends Component<Props> {
  render() {
    return (
      <li className="slds-feed__item">
        <article className="slds-post">
          <Header
            id={this.props.item.id}
            name={this.props.item.actor.displayName}
            actorId={this.props.item.actor.id}
            photoUrl={`${this.props.item.actor.photo.smallPhotoUrl}?oauth_token=${this.props.accessToken}`}
            relativeCreatedDate={this.props.item.relativeCreatedDate}
            instanceUrl={this.props.instanceUrl}
          />
          <Content
            text={parseFeedItemBody(
              this.props.item.body,
              this.props.instanceUrl
            )}
          />
          <Footer />
        </article>
        <Comment
          items={this.props.item.capabilities.comments.page.items}
          instanceUrl={this.props.instanceUrl}
        />
      </li>
    );
  }
}
