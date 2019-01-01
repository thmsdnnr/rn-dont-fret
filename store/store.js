import { createStore } from "redux";
import Note from "../reducers/Note";
import generateNoteRange from "../utils/NoteCalc.js";

const initialState = {
  tuning: ["E2", "A2", "D3", "G3", "B3", "E4"],
  orientation: "P",
  startFret: 0,
  numFrets: 12,
  noteArray: ["E2", "A2", "D3", "G3", "B3", "E4"].map((note, idx) =>
    generateNoteRange(note, 0, 12).map(n => {
      return {
        note: n,
        isActive: false,
        isNameDisplayed: false
      };
    })
  )
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(Note, initialState, composeEnhancers());
// store.subscribe(() => console.log(store.getState()));

export default store;
