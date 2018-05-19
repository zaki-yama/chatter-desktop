// @flow
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
  myRole: | 'GroupOwner'
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
  markupType: | 'Bold'
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
  markupType: | 'Bold'
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

export type MessageSegment = Mention | Link | MarkupBegin | MarkupEnd;
