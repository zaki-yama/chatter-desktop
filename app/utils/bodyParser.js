// @flow
import type { MessageSegment } from '../types/MessageSegment';
import type { FeedItemBody } from '../types/FeedItem';

// eslint-disable-next-line import/prefer-default-export
export function parseFeedItemBody(body: FeedItemBody): string {
  // NOTE: Even isRichText = false, the text might contain mentions
  return body.messageSegments.reduce((prev, current) => prev + parseMessageSegment(current), '');
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
      // FIXME: Temporarily return raw text until I support all messageSegment type.
      // Change to return '' (empty text)
      return messageSegment.text;
  }
}
