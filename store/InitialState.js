/**
 * Initial app state, used to initialize the store
 *
 * TODO: support saving state in AsyncStorage and rehydrating to remember the user's position.
 *
 * @format
 * @flow
 */

import generateNoteRange from '../utils/NoteCalc';

const initialState = {
  AppState: {
    orientation: 'P'
  },
  Note: {
    tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    startFret: 0,
    numFrets: 12,
    includesOpen: true,
    noteArray: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'].map(note =>
      generateNoteRange(note, 0, 12).map(n => ({
        note: n,
        isActive: false,
        isNameDisplayed: false
      }))
    )
  }
};

export default initialState;
