/**
 * NoteGuess
 *
 * A NoteGuess contains note options to click on.
 * TODO: When in Landscape, will be horizontal, not vertical.
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export default function String(props) {
  const { onClick, orientation } = props;
  const StyledNoteGuess = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gold;
    flex-direction: row;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: row; min-height: 64; width: 100%'
      : 'flex-direction: column; min-width: 64; height: 100%;'};
    ${Platform.OS !== 'ios' ? 'flex-direction: column' : ''};
    ${Platform.OS !== 'ios' ? 'width: 50' : ''};
    border: 1px solid green;
    padding-top: 16;
  `;

  const GuessOption = styled.TouchableHighlight`
    flex: 1;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'height: 100%; min-width: 32;'
      : 'width: 100%; min-height: 32;'};
    height: 32;
    border-radius: 4;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    margin-bottom: 8;
    margin-left: 8;
  `;
  const BaseStyledText = styled.Text`
    color: #000000;
  `;
  const androidNoteTextRotateRule = {
    LL: 'transform: rotate(90deg);',
    LR: 'transform: rotate(-90deg);'
  };
  let NoteText = BaseStyledText;
  if (
    Platform.OS !== 'ios' &&
    androidNoteTextRotateRule[orientation] !== undefined
  ) {
    NoteText = styled(BaseStyledText)`
      ${androidNoteTextRotateRule[orientation]}
    `;
  }
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
  return (
    <StyledNoteGuess>
      {notes.map(note => (
        <GuessOption
          onPress={() => {
            onClick(note);
          }}
          key={`${note}_option`}
        >
          <NoteText key={`${note}_text`}>{note}</NoteText>
        </GuessOption>
      ))}
    </StyledNoteGuess>
  );
}
