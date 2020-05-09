import { Tokens } from '../types';

export default function tokensReducer(
  // eslint-disable-next-line default-param-last
  state: Tokens | null = null,
  action: any
) {
  switch (action.type) {
    case 'SET_TOKENS':
      return action.payload.tokens;
    default:
      return state;
  }
}
