// @flow
/**
 * Type Definition of `Message Segment` of `Feed Item Body`
 * ref. https://developer.salesforce.com/docs/atlas.en-us.212.0.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm
 */

type Text = {
  type: 'Text',
  text: string,
};

type Mention = {
  type: 'Mention',
  accessible: boolean,
  name: string,
  text: string,
  record: Group | UserDetail | UserSummary,
  user: UserSummary,
};

type Group = {
  id: string,
  type: 'CollaborationGroup',
  myRole: 'GroupOwner'
    | 'GroupManager'
    | 'NotAMember'
    | 'NotAMemberPrivateRequested'
    | 'StandardMember',
  name: string,
};

type UserSummary = {
  id: string,
  type: 'User',
  name: string,
};

type UserDetail = UserSummary;

type Link = {
  type: 'Link',
  text: string,
  reference: Reference,
  url: string,
};

type Reference = {
  id: string,
  url: string,
};

type MarkupBegin = {
  type: 'MarkupBegin',
  htmlTag: string,
  markupType: 'Bold'
    | 'Code'
    | 'Italic'
    | 'ListItem'
    | 'OrderedList'
    | 'Paragraph'
    | 'Strikethrough'
    | 'Underline'
    | 'UnorderedList',
  text: '',
};

type MarkupEnd = {
  type: 'MarkupEnd',
  htmlTag: string,
  markupType: 'Bold'
    | 'Code'
    | 'Italic'
    | 'ListItem'
    | 'OrderedList'
    | 'Paragraph'
    | 'Strikethrough'
    | 'Underline'
    | 'UnorderedList',
  text: '',
};

export type MessageSegment = Text | Mention | Link | MarkupBegin | MarkupEnd;
