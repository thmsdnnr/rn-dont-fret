/**
 * TrainingSession reducer
 *
 * Reducer for global components of the app, e.g., screen orientation
 * TODO: See if better passed as Context than in this manner.
 * @format
 * @flow
 */

import InitialState from '../store/InitialState';

export default function AppState(state = InitialState, action) {
  switch (action.type) {
    case 'INCREMENT_RIGHT_COUNT':
      return { ...state, rightCount: state.rightCount + 1 };
    case 'INCREMENT_WRONG_COUNT':
      return { ...state, wrongCount: state.wrongCount + 1 };
    case 'RESET_RIGHT_COUNT':
      return { ...state, rightCount: 0 };
    case 'RESET_WRONG_COUNT':
      return { ...state, wrongCount: 0 };
    default:
      return state;
  }
}
