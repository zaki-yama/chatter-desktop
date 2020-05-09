import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type AppState = {
  // TODO
  [k: string]: any;
};

export type GetState = () => AppState;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<AppState, Action<string>>;
