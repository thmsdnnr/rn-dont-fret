/**
 * Fretboard
 *
 * A Fretboard contains Strings which contain Notes.
 *
 * Given a tuning, I know number of strings.
 * Given a startFret and endFret, know how many "notes" to display per string.
 *
 * TODO: make notes tappable
 * TODO: background color options, actually play the note
 * TODO: when screen is horizontal, adjust orientation of scene.
 * TODO: (potentially) set a uniform fret size so frets don't get super big/small when few of them
 * @format
 * @flow
 */

import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import String from "./String";
import Nut from "./Nut";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f5fcff;
  border: 1px solid green;
  margin-left: 24;
`;

type Props = {};
export default class Fretboard extends Component<Props> {
  render() {
    const numStrings = this.props.tuning.length || 0;
    const theStrings = [];
    for (let i = 0; i < numStrings; i++)
      theStrings.push(
        <String
          key={`string_${i}`}
          baseNote={this.props.tuning[i]}
          stringNum={i}
          startFret={this.props.startFret}
          endFret={this.props.endFret}
        />
      );
    return (
      <Container>
        <Nut />
        {theStrings}
      </Container>
    );
  }
}
