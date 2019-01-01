/**
 * Root reducer
 * Combined reducer for all reducers in the app.
 *
 * @format
 * @flow
 */

import { combineReducers } from 'redux';
import AppState from './AppState';
import Note from './Note';

export default combineReducers({
  AppState,
  Note
});
