// @flow
type State = {
  accessToken?: string,
  refreshToken?: string,
  instanceUrl?: string
} | null;

const convert = (rawTokens): State => (
  {
    accessToken: rawTokens.access_token,
    refreshToken: rawTokens.refresh_token,
    instanceUrl: rawTokens.instance_url,
  }
);

export default function tokensReducer(state: State = null, action: any) {
  switch (action.type) {
    case 'SET_TOKENS':
      return convert(action.payload.tokens);
    default:
      return state;
  }
}
