/**
 * Type Definition of `Message Segment` of `Feed Item Body`
 * ref. https://developer.salesforce.com/docs/atlas.en-us.212.0.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm
 */

import { UserSummary, Group } from './Actor';

type UserDetail = UserSummary;

type Text = {
  type: string; // 'Text',
  text: string;
};

type Mention = {
  accessible: boolean;
  name: string;
  text: string;
  type: string; // 'Mention',
  record: Group | UserDetail | UserSummary;
  user: UserSummary;
};

type Link = {
  type: string; // 'Link',
  text: string;
  url: string;
};

type HashTag = {
  tag: string;
  text: string;
  topicUrl: string;
  type: string; // 'HashTag',
  url: string;
};

type MarkupBegin = {
  type: 'MarkupBegin';
  htmlTag: string;
  markupType:
    | 'Bold'
    | 'Code'
    | 'Italic'
    | 'ListItem'
    | 'OrderedList'
    | 'Paragraph'
    | 'Strikethrough'
    | 'Underline'
    | 'UnorderedList';
  text: string;
};

type MarkupEnd = {
  type: 'MarkupEnd';
  htmlTag: string;
  markupType:
    | 'Bold'
    | 'Code'
    | 'Italic'
    | 'ListItem'
    | 'OrderedList'
    | 'Paragraph'
    | 'Strikethrough'
    | 'Underline'
    | 'UnorderedList';
  text: string;
};

export type MessageSegment =
  | Text
  | Mention
  | Link
  | HashTag
  | MarkupBegin
  | MarkupEnd;
