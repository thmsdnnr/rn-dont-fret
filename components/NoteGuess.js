/**
 * NoteGuess
 *
 * A NoteGuess contains note options to click on.
 * TODO: When in Landscape, will be horizontal, not vertical.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import RightWrong from "./RightWrong";

const NoteGuessContainer = styled.View`
  flex: 1;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gold;
  width: 50;
  padding-top: 16;
  padding-bottom: 16;
`;

const GuessOption = styled.TouchableOpacity`
  flex: 1;
  width: 64;
  height: 64;
  border-radius: 8;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin-bottom: 8;
`;

type Props = {};
export default class String extends Component<Props> {
  render() {
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
              onPressed={() => {
                // doing stuff
              }}
              key={`${note}_option_${idx}`}
            >
              <Text key={`${note}_text_${idx}`}>{note}</Text>
            </GuessOption>
          );
        })}
        <RightWrong display={false} displayValue="HOORAY!" />
      </NoteGuessContainer>
    );
  }
}
