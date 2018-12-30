/**
 * NoteGuess
 *
 * A NoteGuess contains note options to click on.
 * TODO: When in Landscape, will be horizontal, not vertical.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, TouchableHighlight, View, Text } from "react-native";
import styled from "styled-components/native";
import RightWrong from "./RightWrong";

type Props = {};
export default class String extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      chosenGuess: ""
    };
  }
  render() {
    const NoteGuessContainer = styled.View`
      flex: 1;
      ${Platform.OS === "ios" && this.props.orientation.indexOf("P") == -1
        ? "flex-direction: row"
        : "flex-direction: column"};
      justify-content: space-between;
      align-items: center;
      border: 1px solid gold;
      ${Platform.OS === "ios" && this.props.orientation.indexOf("P") === -1
        ? "min-height: 64"
        : "min-width: 64"};
      ${Platform.OS !== "ios" ? "flex-direction: column" : ""};
      ${Platform.OS !== "ios" ? "width: 50" : ""};
      border: 1px solid green;
      padding-top: 16;
    `;

    let GuessOption = styled.TouchableHighlight`
      flex: 1;
      height: 64;
      width: 64;
      border-radius: 4;
      border: 1px solid black;
      justify-content: center;
      align-items: center;
      margin-bottom: 8;
      margin-left: 8;
    `;
    let StyledText = styled.Text`
      color: #000000;
    `;
    if (Platform.OS !== "ios") {
      if (this.props.orientation === "LL") {
        StyledText = styled.Text`
          transform: rotate(90deg);
          color: #000000;
        `;
      } else if (this.props.orientation === "LR") {
        StyledText = styled.Text`
          transform: rotate(-90deg);
          color: #000000;
        `;
      }
    }
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ];
    let noteList = [];
    return (
      <NoteGuessContainer>
        {notes.map((note, idx) => {
          return (
            <GuessOption
              onPress={() => {
                this.setState({ chosenGuess: note });
              }}
              key={`${note}_option_${idx}`}
            >
              <StyledText key={`${note}_text_${idx}`}>{note}</StyledText>
            </GuessOption>
          );
        })}
        <Text>{this.state.chosenGuess}</Text>
      </NoteGuessContainer>
    );
  }
}
