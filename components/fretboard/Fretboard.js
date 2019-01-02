/**
 * Fretboard
 *
 * A Fretboard contains Strings which contain Notes.
 *
 * Given a tuning, I know number of strings.
 * Given a startFret and endFret, know how many "notes" to display per string.
 *
 * TODO: potentially consider an image or SVG rather than a CSS implementation for this
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
  const { orientation, noteArray, includesOpen } = props;
  const Container = styled.View`
    flex: 5;
    shadow-color: #000000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.2;
    shadow-radius: 2;
    elevation: 2;
    justify-content: space-between;
    background-color: #f5fcff;
    border: 2px solid #1c313a;
    margin-top: 36;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: column; padding-right: 8; width: 100%'
      : 'flex-direction: row; padding-bottom: 8; height: 100%;'};
  `;
  const theStrings = [];
  for (let i = 0; i < noteArray.length; i += 1) theStrings.push();
  return (
    <Container>
      {noteArray.map((string, idx) => (
        <String
          key={`string_${idx * 3}`}
          includesOpen={includesOpen}
          noteList={noteArray[idx]}
          orientation={orientation}
          stringNum={idx}
        />
      ))}
    </Container>
  );
}
