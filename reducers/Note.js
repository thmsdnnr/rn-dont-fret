const note = (state = initialState, action) => {
  switch (action.type) {
    case "NOTE_ACTIVE":
      const newNoteArray = state.noteArray.slice();
      const { stringIdx, fretIdx } = action;
      newNoteArray[stringIdx][fretIdx]["isActive"] = !newNoteArray[stringIdx][
        fretIdx
      ]["isActive"];
      return Object.assign(state, { noteArray: newNoteArray });
    default:
      return state;
  }
};

export default note;
