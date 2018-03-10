import React, { Component } from 'react';
import { Button } from 'react-lightning-design-system';
import type { FeedItem as FeedItemPropsType } from '../types/FeedItem';

type Props = {
  item: FeedItemPropsType,
  instanceUrl: string
};

type HeaderProps = {
  id: string,
  instanceUrl: string,
  photoUrl: string,
  name: string,
  actorId: string,
  relativeCreatedDate: string
};

function Header(props: HeaderProps) {
  return (
    <header className="slds-post__header slds-media">
      <div className="slds-media__figure">
        <a
          className="slds-avatar slds-avatar_circle slds-avatar_large"
          href={`${props.instanceUrl}/${props.actorId}`}
          target="_blank"
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
          <p><a href={`${props.instanceUrl}/${props.actorId}`} target="_blank" title={props.name}>{props.name}</a></p>
          <button
            className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
            aria-haspopup="true"
            title="More Options"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
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
          >
            {props.relativeCreatedDate}
          </a>
        </p>
      </div>
    </header>
  );
}

type ContentProps = {
  text: ?string
};

function Content(props: ContentProps) {
  return (
    <div className="slds-post__content slds-text-longform">{props.text}</div>
  );
}

function Footer() {
  return (
    <footer className="slds-post__footer">
      <ul className="slds-post__footer-actions-list slds-list_horizontal">
        <li className="slds-col slds-item slds-m-right_medium">
          <Button
            icon="like"
            title="Like this item"
            className="slds-button_reset slds-post__footer-action"
            aria-pressed="false"
          >
            Like
          </Button>
        </li>
        <li className="slds-col slds-item slds-m-right_medium">
          <Button
            icon="share_post"
            title="Comment on this item"
            className="slds-button_reset slds-post__footer-action"
          >
            Comment
          </Button>
        </li>
        <li className="slds-col slds-item slds-m-right_medium">
          <Button
            icon="share"
            title="Share this item"
            className="slds-button_reset slds-post__footer-action"
          >
            Share
          </Button>
        </li>
      </ul>
    </footer>
  );
}

/* TODO
function Comment(props) {
  return (
    <article className="slds-comment slds-media slds-hint-parent">
      <div className="slds-media__figure">
        <a href="javascript:void(0);" className="slds-avatar slds-avatar_circle slds-avatar_medium">
          <img alt="Jenna Davis" src="/assets/images/avatar2.jpg" title="Jenna Davis avatar" />
        </a>
      </div>
      <div className="slds-media__body">
        <header className="slds-media slds-media_center">
          <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
            <p className="slds-truncate" title="Jenna Davis"><a href="javascript:void(0);">Jenna Davis</a></p>
            <button className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small" aria-haspopup="true" title="More Options">
              <svg className="slds-button__icon" aria-hidden="true">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
              </svg>
              <span className="slds-assistive-text">More Options</span>
            </button>
          </div>
        </header>
        <div className="slds-comment__content slds-text-longform">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <footer>
          <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
            <li className="slds-item">
              <button className="slds-button_reset slds-text-color_weak" title="Like this item" aria-pressed="false">Like</button>
            </li>
            <li className="slds-item">16hr Ago</li>
          </ul>
        </footer>
      </div>
    </article>
  );
}
*/

export default class FeedItem extends Component<Props> {
  render() {
    console.log(this.props.item);
    return (
      <li className="slds-feed__item">
        <article className="slds-post">
          <Header
            id={this.props.item.id}
            name={this.props.item.actor.displayName}
            actorId={this.props.item.actor.id}
            photoUrl={this.props.item.actor.photo.standardEmailPhotoUrl}
            relativeCreatedDate={this.props.item.relativeCreatedDate}
            instanceUrl={this.props.instanceUrl}
          />
          <Content text={this.props.item.body.text} />
          <Footer />
        </article>
      </li>
    );
  }
}
