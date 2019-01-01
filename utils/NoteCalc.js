/**
 * generateNoteRange
 *
 * For a given base note, a direction, and a number of half steps, return an array
 * of note names and positions. nextNote is a private generator function.
 * TODO: enharmonics
 * TODO: consider statis JSON config for common formats rather than generating each time.
 *   if peformance becomes an issue.
 *
 * @format
 * @flow
 */

function* nextNote(baseNote, direction = 'UP') {
  const notes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
  ];
  const split = baseNote.split('');
  const octave = Number(split[split.length - 1]);
  if (Number.isNaN(octave)) {
    throw new Error('Octave is not a number!');
  }
  const note = split.slice(0, split.length - 1).join('');
  let currentIdx = notes.indexOf(note);
  if (currentIdx === -1) {
    throw new Error('Not a valid note (or you used a flat sign)');
  }
  let currentOctave = octave;
  while (true) {
    if (direction === 'UP') {
      if (currentIdx === notes.length - 1) {
        currentIdx = 0;
        currentOctave += 1;
      } else {
        currentIdx += 1;
      }
    }
    if (direction === 'DOWN') {
      // down
      if (currentIdx === 0) {
        currentIdx = notes.length;
        currentOctave += 1;
      } else {
        currentIdx -= 1;
      }
    }
    const thisNote = notes[currentIdx];
    yield `${thisNote}${currentOctave}`;
  }
}

export default function generateNoteRange(baseNote, initialOffset = 0, noteCt) {
  // TODO: cache result in asyncStorage so we only ever have to generate once for a given tuning and num notes
  // or just store a JSON file of strings and note values for different instruments.
  let ct = 0;
  const result = initialOffset === 0 ? [baseNote] : [];
  const nextNoteGenerator = nextNote(baseNote);
  let remainingOffset = initialOffset;
  while (remainingOffset > 1) {
    nextNoteGenerator.next();
    remainingOffset -= 1;
  }
  while (ct < noteCt) {
    result.push(nextNoteGenerator.next().value);
    ct += 1;
  }
  return result;
}
