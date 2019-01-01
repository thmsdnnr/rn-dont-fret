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
      return Object.assign(state, { orientation: action.orientation });
    default:
      return state;
  }
}
