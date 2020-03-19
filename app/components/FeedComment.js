import React, { Component } from 'react';

import { parseFeedItemBody } from '../utils/bodyParser';

import type { FeedComment as FeedCommentPropsType } from '../types/FeedComment';

type Props = {
  item: FeedCommentPropsType,
  instanceUrl: string,
  accessToken: string,
};

type MediaFigureProps = {
  name: string,
  userId: string,
  instanceUrl: string,
  photoUrl: string,
};

function MediaFigure(props: MediaFigureProps) {
  return (
    <div className="slds-media__figure">
      <a href={`${props.instanceUrl}/${props.userId}`} className="slds-avatar slds-avatar_circle slds-avatar_medium">
        <img alt={props.name} src={props.photoUrl} title={`${props.name} avatar`} />
      </a>
    </div>
  );
}

type HeaderProps = {
  name: string,
  actorId: string,
  instanceUrl: string,
};

function Header(props: HeaderProps) {
  return (
    <header className="slds-media slds-media_center">
      <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
        <p className="slds-truncate" title={props.name}>
          <a href={`${props.instanceUrl}/${props.actorId}`}>{props.name}</a>
        </p>
        <button className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small" aria-haspopup="true" title="More Options">
          <svg className="slds-button__icon" aria-hidden="true">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
          </svg>
          <span className="slds-assistive-text">More Options</span>
        </button>
      </div>
    </header>
  );
}

type ContentProps = {
  text: ?string,
};

function Content(props: ContentProps) {
  return (
    <div
      className="slds-post__content slds-text-longform"
      dangerouslySetInnerHTML={{ __html: props.text }}
    />
  );
}

type FooterProps = {
  relativeCreatedDate: string,
};

function Footer(props: FooterProps) {
  return (
    <footer>
      <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
        <li className="slds-item">
          <button className="slds-button_reset slds-text-color_weak" title="Like this item" aria-pressed="false">Like</button>
        </li>
        <li className="slds-item">{props.relativeCreatedDate}</li>
      </ul>
    </footer>
  );
}

export default class FeedComment extends Component<Props> {
  render() {
    return (
      <article className="slds-comment slds-media slds-hint-parent">
        <MediaFigure
          name={this.props.item.user.displayName}
          userId={this.props.item.user.id}
          photoUrl={`${this.props.item.user.photo.smallPhotoUrl}?oauth_token=${this.props.accessToken}`}
          instanceUrl={this.props.instanceUrl}
        />
        <div className="slds-media__body">
          <Header
            name={this.props.item.user.displayName}
            actorId={this.props.item.user.id}
            instanceUrl={this.props.instanceUrl}
          />
          <Content text={parseFeedItemBody(this.props.item.body, this.props.instanceUrl)} />
          <Footer relativeCreatedDate={this.props.item.relativeCreatedDate} />
        </div>
      </article>
    );
  }
}
