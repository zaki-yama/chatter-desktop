import { Reference, FeedItemBody } from './Resource';
import { Actor } from './Actor';

type FeedElementType = 'Bundle' | 'FeedItem' | 'Recommendation';

type ClientInfo = {
  applicationName: string;
  applicationUrl: string;
};

export type FeedItem = {
  actor: Actor;
  attachment: any;
  body: FeedItemBody;
  capabilities: any;
  clientInfo?: ClientInfo;
  createdDate: string;
  relativeCreatedDate: string;
  event?: boolean;
  feedElementType: FeedElementType;
  hasVerifiedComment: boolean;
  header: any;
  id: string;
  isDeleteRestricted: boolean;
  isSharable: boolean;
  modifiedDate?: string;
  originalFeedItem?: Reference;
  originalFeedItemActor: any;
  parent: any;
  photoUrl: string;
  preamble: any;
  url: string;
  visibility?: string;
};
