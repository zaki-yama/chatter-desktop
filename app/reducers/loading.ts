// eslint-disable-next-line default-param-last
export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_START':
      return true;
    case 'LOADING_END':
      return false;
    default:
      return state;
  }
}
