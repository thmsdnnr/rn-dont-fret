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
    noteToGuess: {},
    tuning: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
    startFret: 0,
    numFrets: 12,
    numStrings: 6,
    includesOpen: true,
    noteArray: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'].map(note =>
      generateNoteRange(note, 0, 12).map(n => ({
        note: n,
        isActive: false,
        isNameDisplayed: false
      }))
    )
  },
  TrainingSession: {
    rightCount: 0,
    wrongCount: 0
  }
};

export default initialState;
