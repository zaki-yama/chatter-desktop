import { Photo, Reference } from './Resource';

type EntityLabel = {
  label: string;
  labelPlural: string;
};

type Motif = {
  color: string;
  largeIconUrl: string;
  mediumIconUrl: string;
  smallIconUrl: string;
  svgIconUrl: string;
};

type OutOfOffice = {
  message: string;
};

type Reputation = {
  reputationLevel: string;
  reputationPoints: string;
  url: string;
};

type RecordSummary = {
  entityLabel: EntityLabel;
  id: string;
  motif: Motif;
  mySubscription?: Reference;
  name: string;
  type: string;
  url: string;
};

export type UserSummary = {
  additionalLabel?: string;
  communityNickname: string;
  companyName?: string;
  displayName: string;
  firstName?: string;
  id: string;
  isActive: boolean;
  isInThisCommunity: boolean;
  lastName: string;
  motif: Motif;
  mySubscription?: Reference;
  name: string;
  outOfOffice: OutOfOffice;
  photo: Photo;
  reputation?: Reputation;
  title?: string;
  type: string; // 'User',
  url: string;
  userType: string;
};

type UnauthenticatedUser = {
  name: string;
  type: string;
};

export type Group = {
  id: string;
  type: 'CollaborationGroup';
  myRole:
    | 'GroupOwner'
    | 'GroupManager'
    | 'NotAMember'
    | 'NotAMemberPrivateRequested'
    | 'StandardMember';
  name: string;
};

export type Actor = RecordSummary | UserSummary | UnauthenticatedUser;
