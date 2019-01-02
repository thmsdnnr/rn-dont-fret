/**
 * Note
 *
 * A Note is the smallest unit on a Fretboard and is contained inside a String.
 * TODO: background color options
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export default function Note(props) {
  const {
    noteValue,
    isHighlighted,
    highlightColor,
    isNameDisplayed,
    orientation
  } = props;
  const textColor = '#111111';
  const highlightedTextColor = '#ffffff';
  const highlightedBackgroundColor = '#000000';
  const BaseNoteText = styled.Text`
    color: ${isHighlighted ? highlightedTextColor : textColor};
    font-family: 'Lato-Bold';
    font-size: 16;
  `;
  const androidNoteTextRotateRule = {
    LL: 'transform: rotate(90deg);',
    LR: 'transform: rotate(-90deg);'
  };
  let NoteText = BaseNoteText;
  if (
    Platform.OS !== 'ios' &&
    androidNoteTextRotateRule[orientation] !== undefined
  ) {
    NoteText = styled(BaseNoteText)`
      ${androidNoteTextRotateRule[orientation]}
    `;
  }
  const StyledView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    ${isHighlighted === true ? 'elevation: 1; transform: scale(1.02);' : ''};
  `;
  const StyledText = styled.View`
    flex: 0;
    justify-content: center;
    align-items: center;
    ${isHighlighted === true
      ? `background-color: ${highlightColor ||
          highlightedBackgroundColor} border: 1px solid #111111;`
      : `background-color: #ffffff; border: 1px solid #cccccc;`};
    min-height: 32;
    min-width: 32;
    border-radius: 16;
  `;
  return (
    <StyledView>
      <StyledText>
        {isNameDisplayed && noteValue && <NoteText>{noteValue}</NoteText>}
      </StyledText>
    </StyledView>
  );
}
