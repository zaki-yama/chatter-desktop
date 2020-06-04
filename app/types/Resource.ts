import { MessageSegment } from './MessageSegment';

export type Reference = {
  id: string;
  url: string;
};

export type Photo = {
  fullEmailPhotoUrl: string;
  largePhotoUrl: string;
  mediumPhotoUrl: string;
  photoVersionId?: string;
  smallPhotoUrl: string;
  standardEmailPhotoUrl: string;
  url: string;
};

export type FeedItemBody = {
  isRichText: boolean;
  messageSegments: MessageSegment[];
  text: string;
};
