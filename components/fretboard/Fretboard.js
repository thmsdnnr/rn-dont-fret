/**
 * Fretboard
 *
 * A Fretboard contains Strings which contain Notes.
 *
 * Given a tuning, I know number of strings.
 * Given a startFret and endFret, know how many "notes" to display per string.
 *
 * TODO: make notes tappable
 * TODO: background color options, actually play the note
 * TODO: when screen is horizontal, adjust orientation of scene.
 * TODO: (potentially) set a uniform fret size so frets don't get super big/small when few of them
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import String from './String';

export default function Fretboard(props) {
  const { orientation, noteArray, startFret } = props;
  const Container = styled.View`
    flex: 4;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: column'
      : 'flex-direction: row'};
    justify-content: space-between;
    background-color: #f5fcff;
    border: 1px solid green;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'width: 90%'
      : 'height: 90%'};
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'margin-top: 24'
      : 'margin-left: 24'};
  `;
  const theStrings = [];
  for (let i = 0; i < noteArray.length; i += 1) theStrings.push();
  return (
    <Container>
      {noteArray.map((string, idx) => (
        <String
          key={`string_${idx}`}
          includesOpen={startFret}
          noteList={noteArray[idx]}
          orientation={orientation}
          stringNum={idx}
        />
      ))}
    </Container>
  );
}
