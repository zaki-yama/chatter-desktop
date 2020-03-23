// import type { MessageSegment } from '../types/MessageSegment';
// import type { FeedItemBody } from '../types/Resource';

// eslint-disable-next-line import/prefer-default-export
export function parseFeedItemBody(body, instanceUrl: string): string {
  // NOTE: Even isRichText = false, the text might contain mentions
  return body.messageSegments.reduce(
    (prev, current) => prev + parseMessageSegment(current, instanceUrl),
    ''
  );
}

function parseMessageSegment(messageSegment, instanceUrl: string): string {
  switch (messageSegment.type) {
    case 'Text':
      // Need to remove zero width space (u200B)
      return messageSegment.text.replace(/\u200B/g, '').replace(/\n/g, '<br>');
    case 'Mention':
      return `<a href="${instanceUrl}/${messageSegment.record.id}" target="_blank">${messageSegment.text}</a>`;
    case 'MarkupBegin':
      return `<${messageSegment.htmlTag}>`;
    case 'MarkupEnd':
      return `</${messageSegment.htmlTag}>`;
    case 'Link':
      return `<a href="${messageSegment.url}" target="_blank">${messageSegment.text}</a>`;
    default:
      // FIXME: Temporarily return raw text until I support all messageSegment type.
      // Change to return '' (empty text)
      return messageSegment.text;
  }
}
