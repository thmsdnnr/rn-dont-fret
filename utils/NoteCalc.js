const nextNote = function*(baseNote, direction = "UP") {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ];
  const split = baseNote.split("");
  const octave = Number(split[split.length - 1]);
  if (isNaN(octave)) {
    throw new Error("Octave is not a number!");
  }
  const note = split.slice(0, split.length - 1).join("");
  let currentIdx = notes.indexOf(note);
  if (currentIdx === -1) {
    throw new Error("Not a valid note (or you used a flat sign)");
  }
  let currentOctave = octave;
  while (true) {
    if (direction === "UP") {
      if (currentIdx === notes.length - 1) {
        currentIdx = 0;
        currentOctave++;
      } else {
        currentIdx++;
      }
    } else {
      // down
      if (currentIdx === 0) {
        currentIdx = notes.length;
        currentOctave++;
      } else {
        currentIdx--;
      }
    }
    const thisNote = notes[currentIdx];
    yield `${thisNote}${currentOctave}`;
  }
};

export default (generateNoteRange = (baseNote, noteCt) => {
  let ct = 0;
  let result = [];
  const nextNoteGenerator = nextNote(baseNote);
  while (ct < noteCt) {
    result.push(nextNoteGenerator.next().value);
    ct++;
  }
  return result;
});
