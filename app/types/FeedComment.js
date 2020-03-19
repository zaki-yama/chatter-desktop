// @flow
import type { Reference, FeedItemBody } from './Resource';
import type { UserSummary } from './Actor';

export type FeedComment = {
  attachment: any,
  body: FeedItemBody,
  // capabilities: FeedElementCapabilities,
  // clientInfo: ClientInfo,
  // comments: Array<Comment>, -> capabilities.comments.page
  createdDate: string,
  feedElement: Reference,
  id: string,
  isDeleteRestricted: boolean,
  // likes: LikePage, -> capabilities.chatterLikes.page
  // likeMessage:
  // myLike:
  parent: Reference,
  relativeCreatedDate: string,
  threadLevel: ?number,
  threadParentId: ?string,
  type: string,
  url: string,
  user: UserSummary,
};
