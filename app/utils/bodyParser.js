// @flow
import type { MessageSegment } from '../types/MessageSegment';
import type { FeedItemBody } from '../types/FeedItem';

// eslint-disable-next-line import/prefer-default-export
export function parseFeedItemBody(body: FeedItemBody) {
  return body.isRichText
    ? parseMessageSegments(body.messageSegments)
    : body.text;
}

function parseMessageSegments(messageSegments: Array<MessageSegment>) {
}
