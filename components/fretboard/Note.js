/**
 * Note
 *
 * A Note is the smallest unit on a Fretboard and is contained inside a String.
 * TODO: background color options
 * @format
 * @flow
 */

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function Note(props) {
  const { orientation } = props;
  let highlightColor = props.highlightColor || "#000000";
  const BaseNoteText = styled.Text`
    color: ${props.isHighlighted ? "#ffffff" : "#111111"};
  `;
  const androidNoteTextRotateRule = {
    LL: "transform: rotate(90deg);",
    LR: "transform: rotate(-90deg);"
  };
  let NoteText = BaseNoteText;
  if (
    Platform.OS !== "ios" &&
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
    ${!props.isOpen ? "border: 1px solid silver" : ""};
  `;
  const StyledText = styled.View`
    flex: 0;
    justify-content: center;
    align-items: center;
    ${props.isHighlighted === true
      ? `background-color: ${highlightColor} border: 1px solid #cccccc;`
      : `background-color: #ffffff; border: 1px solid #111111;`};
    min-height: 32;
    min-width: 32;
    border-radius: 16;
  `;
  return (
    <StyledView>
      <StyledText>
        {props.isNameDisplayed && props.noteValue && (
          <NoteText>{props.noteValue}</NoteText>
        )}
      </StyledText>
    </StyledView>
  );
}
