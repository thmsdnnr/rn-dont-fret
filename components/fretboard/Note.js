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

type Props = {};
export default class Note extends Component<Props> {
  render() {
    let NoteText = styled.Text`
      color: ${this.props.isActive ? "#ffffff" : "#111111"};
    `;
    if (Platform.OS !== "ios") {
      if (this.props.orientation === "LL") {
        NoteText = styled.Text`
          transform: rotate(90deg);
          color: ${this.props.isActive ? "#ffffff" : "#111111"};
        `;
      } else if (this.props.orientation === "LR") {
        NoteText = styled.Text`
          transform: rotate(-90deg);
          color: ${this.props.isActive ? "#ffffff" : "#111111"};
        `;
      }
    }
    const StyledView = styled.View`
      flex: 1;
      justify-content: center;
      align-items: center;
      ${!this.props.isOpen ? "border: 1px solid silver" : ""};
    `;
    const StyledText = styled.View`
      flex: 0;
      justify-content: center;
      align-items: center;
      ${this.props.isActive === true
        ? "background-color: #112211; border: 1px solid #cccccc;"
        : "background-color: #ffffff; border: 1px solid #111111;"};
      min-height: 32;
      min-width: 32;
      border-radius: 16;
    `;
    return (
      <StyledView>
        <StyledText>
          <NoteText>
            {this.props.isNameDisplayed && this.props.noteValue}
          </NoteText>
        </StyledText>
      </StyledView>
    );
  }
}
