// @flow
type FeedElementType = 'Bundle' | 'FeedItem' | 'Recommendation';

type EntityLabel = {
  label: string,
  labelPlural: string,
};

type RecordSummary = {
  entityLabel: EntityLabel,
  id: string,
  // motif:
  // name:
};

type Photo = {
  smallPhotoUrl: string,
};

type UserSummary = {
  id: string,
  companyName: string,
  displayName: string,
  // motif:
  photo: Photo,
  url: string, // URL to the user's Chatter profile
  userType: | 'ChatterGuest'
    | 'ChatterOnly'
    | 'Guest'
    | 'Internal'
    | 'Portal'
    | 'System'
    | 'Undefined',
};

type Actor = RecordSummary | UserSummary;
export type FeedItem = {
  id: string,
  feedElementType: FeedElementType,
  actor: Actor,
  attachment: any,
  body: any,
  // capabilities: FeedElementCapabilities,
  // clientInfo: ClientInfo,
  // comments: Array<Comment>, -> capabilities.comments.page
  createdDate: string,
  relativeCreatedDate: string,
  // currentUserLike:
  event: boolean,
  header: any,
  isLikedByCurrentUser: boolean,
  // likes: LikePage, -> capabilities.chatterLikes.page
  // likeMessage:
  modifiedDate: string,
  url: string,
  visibility: string,
};

// type GenericFeedElement = {
// body:
// capabilities:
// createdDate:
// feedElementType: FeedElementType
// header:
// id:
// modifiedDate:
// parent:
// relativeCreatedDate:
// url:
// }
