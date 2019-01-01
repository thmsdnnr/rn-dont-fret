import InitialState from "../store/InitialState";

const setKeysOnNote = (state, action, updates) => {
  const noteArrayCopy = state.noteArray.slice();
  const { stringIdx, fretIdx } = action;
  for (key in updates) noteArrayCopy[stringIdx][fretIdx][key] = updates[key];
  return noteArrayCopy;
};

const updatesForAction = {
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
  }
};

export const Note = (state = InitialState, action) => {
  if (!updatesForAction[action.type]) return state;
  return {
    ...state,
    noteArray: setKeysOnNote(state, action, updatesForAction[action.type])
  };
};