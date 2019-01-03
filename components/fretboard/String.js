/**
 * String
 *
 * A String contains noteList and is contained by a Fretboard.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Nut from './Nut';
import Note from './Note';
import Fret from './Fret';

export default function String(props) {
  const { orientation, noteList, stringNum, includesOpen, notePressed } = props;
  const NoteContainer = styled.View`
    flex: 1;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: row'
      : 'flex-direction: column'};
    justify-content: flex-start;
    align-items: center;
  `;
  const noteComponentList = [];
  for (let i = 0; i < noteList.length; i += 1) {
    const { note, isHighlighted, highlightColor, isNameDisplayed } = noteList[
      i
    ];
    const noteKey = `string_${stringNum}_note_${i}`;
    if (i === 0 && includesOpen === true) {
      noteComponentList.push(
        <Note
          key={noteKey}
          string={stringNum}
          fret={i}
          orientation={orientation}
          isOpen
          noteName={note}
          isHighlighted={isHighlighted}
          highlightColor={highlightColor}
          isNameDisplayed
          onPress={notePressed}
        />,
        <Nut key="open_nut" orientation={orientation} />
      );
    } else {
      noteComponentList.push(
        <Note
          key={noteKey}
          string={stringNum}
          fret={i}
          orientation={orientation}
          isOpen={false}
          noteName={note}
          isHighlighted={isHighlighted}
          highlightColor={highlightColor}
          isNameDisplayed
          onPress={notePressed}
        />,
        <Fret key={`string_${stringNum}_fret_${i}`} orientation={orientation} />
      );
    }
  }
  return <NoteContainer>{noteComponentList}</NoteContainer>;
}
