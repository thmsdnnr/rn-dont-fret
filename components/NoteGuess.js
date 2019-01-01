/**
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: column; min-height: 64; width: 100%'
      : 'flex-direction: column; min-width: 64; height: 100%;'};
    ${Platform.OS !== 'ios' ? 'flex-direction: column' : ''};
    ${Platform.OS !== 'ios' ? 'width: 50' : ''};
 * NoteGuess
 *
 * A NoteGuess contains note options to click on.
 * TODO: When in Landscape, will be horizontal, not vertical.
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

export default function String(props) {
  const { row, onClick, orientation } = props;
  const NoteGuess = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    ${Platform.OS === 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: column; max-width: 200; height: 90%'
      : 'flex-direction: column; min-width: 50; height: 90%;'};
    ${Platform.OS !== 'ios' && orientation.indexOf('P') === -1
      ? 'flex-direction: column; max-width: 200; height: 90%'
      : 'flex-direction: column; min-width: 50; height: 90%;'};
  `;
  const notes =
    row === 1
      ? ['C', 'C#', 'D', 'D#', 'E', 'F']
      : ['F#', 'G', 'G#', 'A', 'A#', 'B'];

  const buttonStyle = {
    flex: 1,
    backgroundColor: '#455a64',
    minWidth: 48,
    maxWidth: 64,
    minHeight: 48,
    maxHeight: 64,
    marginBottom: 8,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#ff6d00'
  };

  const titleStyle = {
    fontSize: 16,
    fontFamily: 'Lato-Bold'
  };

  const androidNoteTextRotateRule = {
    LL: 'rotate(90deg)',
    LR: 'rotate(-90deg)'
  };
  const StyledView = styled.View`
    ${Platform.OS !== 'ios' &&
    androidNoteTextRotateRule[orientation] !== undefined
      ? `transform: ${androidNoteTextRotateRule[orientation]}`
      : ''}
  `;

  return (
    <NoteGuess>
      {notes.map(note => (
        <StyledView key={`${note}_option`}>
          <Button
            buttonStyle={buttonStyle}
            textStyle={titleStyle}
            onPress={() => {
              onClick(note);
            }}
            key={`${note}_option`}
            title={note}
          />
        </StyledView>
      ))}
    </NoteGuess>
  );
}
