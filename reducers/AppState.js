/**
 * AppState reducer
 *
 * Reducer for global components of the app, e.g., screen orientation
 * TODO: See if better passed as Context than in this manner.
 * @format
 * @flow
 */

import InitialState from '../store/InitialState';

export default function AppState(state = InitialState, action) {
  switch (action.type) {
    case 'DEVICE_ROTATE':
      return { ...state, orientation: action.orientation };
    case 'HEADER_HIDE': // TODO: can probably eliminate these.
      return { ...state, isHeaderHidden: true };
    case 'HEADER_SHOW':
      return { ...state, isHeaderHidden: false };
    default:
      return state;
  }
}
