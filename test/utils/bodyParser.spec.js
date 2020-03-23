import { parseFeedItemBody } from '../../app/utils/bodyParser';

describe('parseFeedItemBody', () => {
  it('should parse markupBegin/End', () => {
    const body = {
      isRichText: true,
      messageSegments: [
        {
          htmlTag: 'p',
          markupType: 'Paragraph',
          text: '',
          type: 'MarkupBegin'
        },
        {
          text: 'Hello',
          type: 'Text'
        },
        {
          htmlTag: 'p',
          markUpType: 'Paragraph',
          text: '',
          type: 'MarkupEnd'
        }
      ],
      text: 'Hello'
    };

    const expected = '<p>Hello</p>';

    expect(parseFeedItemBody(body)).toBe(expected);
  });

  it('should just return text when isRichText = false', () => {
    const body = {
      isRichText: false,
      text: 'hello'
    };

    const expected = 'hello';

    expect(parseFeedItemBody(body)).toBe(expected);
  });
});
