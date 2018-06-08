// @flow
import type { MessageSegment } from '../types/MessageSegment';
import type { FeedItemBody } from '../types/FeedItem';

// eslint-disable-next-line import/prefer-default-export
export function parseFeedItemBody(body: FeedItemBody): string {
  return body.isRichText
    ? parseMessageSegments(body.messageSegments)
    : body.text.replace(/u200B/g, '').replace(/\n/g, '<br>');
}

function parseMessageSegments(messageSegments: Array<MessageSegment>) {
  return messageSegments.reduce((prev, current) => prev + parseMessageSegment(current), '');
}

function parseMessageSegment(messageSegment: MessageSegment): string {
  switch (messageSegment.type) {
    case 'Text':
      // Need to remove zero width space (u200B)
      return messageSegment.text.replace(/\u200B/g, '').replace(/\n/g, '<br>');
    case 'MarkupBegin':
      return `<${messageSegment.htmlTag}>`;
    case 'MarkupEnd':
      return `</${messageSegment.htmlTag}>`;
    default:
      return '';
  }
}
