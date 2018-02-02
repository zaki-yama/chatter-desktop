export default function tokensReducer(state = null, action) {
  switch (action.type) {
    case 'SET_TOKENS':
      return action.payload.tokens;
    default:
      return state;
  }
}
