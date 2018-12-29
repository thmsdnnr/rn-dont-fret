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

const StyledSafe = styled.SafeAreaView`
  flex: 1;
  width: 95%;
  flex-direction: column;
  align-items: flex-start;
`;

const Container = styled.View`
  flex: 1;
  width: 75%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f5fcff;
  margin-top: 24;
  margin-bottom: 48;
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
          stringNum={i}
          startFret={this.props.startFret}
          endFret={this.props.endFret}
        />
      );
    return (
      <StyledSafe>
        <Container>
          <Nut />
          {theStrings}
        </Container>
      </StyledSafe>
    );
  }
}
