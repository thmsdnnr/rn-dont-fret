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

export default (generateNoteRange = (baseNote, initialOffset = 0, noteCt) => {
  // TODO: cache result in asyncStorage so we only ever have to generate once for a given tuning and num notes
  // or just store a JSON file of strings and note values for different instruments.
  let ct = 0;
  let result = initialOffset === 0 ? [baseNote] : [];
  const nextNoteGenerator = nextNote(baseNote);
  while (initialOffset > 1) {
    nextNoteGenerator.next();
    initialOffset--;
  }
  while (ct < noteCt) {
    result.push(nextNoteGenerator.next().value);
    ct++;
  }
  return result;
});
