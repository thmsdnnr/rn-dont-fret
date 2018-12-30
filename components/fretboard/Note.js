/**
 * Note
 *
 * A Note is the smallest unit on a Fretboard and is contained inside a String.
 * TODO: background color options
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const StyledText = styled.View`
  flex: 0;
  justify-content: center;
  align-items: center;
  background-color: #112211;
  min-height: 32;
  min-width: 32;
  border-radius: 16;
`;

type Props = {};
export default class Note extends Component<Props> {
  render() {
    let NoteText = styled.Text`
      color: #fafafa;
    `;
    if (Platform.OS !== "ios") {
      if (this.props.orientation === "LL") {
        NoteText = styled.Text`
          transform: rotate(90deg);
          color: #fafafa;
        `;
      } else if (this.props.orientation === "LR") {
        NoteText = styled.Text`
          transform: rotate(-90deg);
          color: #fafafa;
        `;
      }
    }
    const StyledView = styled.View`
      flex: 1;
      background-color: ${this.props && this.props.isActive === true
        ? "#000000;"
        : "#ffffff"};
      justify-content: center;
      align-items: center;
      ${this.props && !this.props.isOpen ? "border: 1px solid silver" : ""};
    `;
    return (
      <StyledView>
        <StyledText>
          <NoteText>{this.props.noteValue}</NoteText>
        </StyledText>
      </StyledView>
    );
  }
}
