import React from 'react';

function Header(props) {
  return (
    <header className="slds-post__header slds-media">
      <div className="slds-media__figure">
        <a href="javascript:void(0);" className="slds-avatar slds-avatar_circle slds-avatar_large">
          <img alt="Jason Rodgers" src="/assets/images/avatar1.jpg" title="Jason Rodgers avatar" />
        </a>
      </div>
      <div className="slds-media__body">
        <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
          <p><a href="javascript:void(0);" title="Jason Rodgers">Jason Rogers</a> — <a href="javascript:void(0);" title="Design Systems">Design Systems</a></p>
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
        <p className="slds-text-body_small"><a href="javascript:void(0);" title="Click for single-item view of this post" className="slds-text-link_reset">5 days Ago</a></p>
      </div>
    </header>
  );
}

function Content(props) {
  return (
    <div className="slds-post__content slds-text-longform">
      <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
    </div>
  );
}

function Footer(props) {
  return (
    <footer className="slds-post__footer">
      <ul className="slds-post__footer-actions-list slds-list_horizontal">
        <li className="slds-col slds-item slds-m-right_medium">
          <button title="Like this item" className="slds-button_reset slds-post__footer-action" aria-pressed="false">
            <svg className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle" aria-hidden="true">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#like" />
            </svg>
            Like
          </button>
        </li>
        <li className="slds-col slds-item slds-m-right_medium">
          <button title="Comment on this item" className="slds-button_reset slds-post__footer-action">
            <svg className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle" aria-hidden="true">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#share_post" />
            </svg>
            Comment
          </button>
        </li>
        <li className="slds-col slds-item slds-m-right_medium">
          <button title="Share this item" className="slds-button_reset slds-post__footer-action">
            <svg className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle" aria-hidden="true">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#share" />
            </svg>
            Share
          </button>
        </li>
      </ul>
      <ul className="slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title">
        <li className="slds-item">20 shares</li>
        <li className="slds-item">259 views</li>
      </ul>
    </footer>
  );
}

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

export default class FeedItem extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <li className="slds-feed__item">
        <article className="slds-post">
          <Header />
          <Content />
          <Footer />
        </article>
        <div className="slds-feed__item-comments">
          <div className="slds-p-horizontal_medium slds-p-vertical_x-small slds-grid">
            <button className="slds-button_reset slds-text-link">More comments</button>
            <span className="slds-text-body_small slds-col_bump-left">1 of 8</span>
          </div>
          <ul>
            <li>
              <Comment />
            </li>
          </ul>
        </div>
      </li>
    );
  }
}
