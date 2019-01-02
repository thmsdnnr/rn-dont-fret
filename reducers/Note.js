import InitialState from '../store/InitialState';
import generateNoteRange from '../utils/NoteCalc';

const setKeysOnNote = (state, action, updates) => {
  const noteArrayCopy = state.noteArray.slice();
  const { stringIdx, fretIdx } = action;
  Object.keys(updates).forEach(key => {
    noteArrayCopy[stringIdx][fretIdx][key] = updates[key];
  });
  return noteArrayCopy;
};

const updatesForAction = {
  RANDOM_NOTE_ON: {
    isHighlighted: true,
    isNameDisplayed: false
  },
  NOTE_ON: {
    isHighlighted: true,
    isNameDisplayed: true
  },
  NOTE_OFF: {
    isHighlighted: false,
    isNameDisplayed: false
  },
  HIGHLIGHT_ON: {
    isHighlighted: true
  },
  HIGHLIGHT_OFF: {
    isHighlighted: false
  },
  UPDATE_NOTE_ARRAY: {},
  RANDOM_NOTE_TO_GUESS: {}
};

const getRandomString = state =>
  Math.floor(Math.random() * (state.noteArray.length - 1));
const getRandomFretForString = (string, state) =>
  Math.floor(Math.random() * (state.noteArray[string].length - 1));

export default function Note(state = InitialState, action) {
  if (!updatesForAction[action.type]) return state;
  switch (action.type) {
    case 'RANDOM_NOTE_ON':
      const rString = getRandomString(state);
      return {
        ...state,
        noteArray: setKeysOnNote(
          state,
          {
            stringIdx: rString,
            fretIdx: getRandomFretForString(rString, state)
          },
          updatesForAction[action.type]
        )
      };
    case 'RANDOM_NOTE_TO_GUESS':
      const rNote = getRandomString(state);
      const rFret = getRandomFretForString(rNote, state);
      return {
        ...state,
        noteToGuess: {
          stringIdx: rNote,
          fretIdx: rFret,
          noteName: state.noteArray[rNote][rFret]['note']
        }
      };
    case 'UPDATE_NOTE_ARRAY':
      const { startFret, numFrets } = action;
      return {
        ...state,
        startFret,
        numFrets,
        includesOpen: startFret === 0,
        noteArray: state.tuning.map(note =>
          generateNoteRange(note, startFret, startFret + numFrets).map(n => ({
            note: n,
            isActive: false,
            isNameDisplayed: false
          }))
        )
      };
    default:
      return {
        ...state,
        noteArray: setKeysOnNote(state, action, updatesForAction[action.type])
      };
  }
}
