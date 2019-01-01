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
import { Platform, Text, SafeAreaView, View } from "react-native";
import String from "./String";
import Nut from "./Nut";
import styled from "styled-components/native";

type Props = {};
export default class Fretboard extends Component<Props> {
  render() {
    const Container = styled.View`
      flex: 4;
      ${Platform.OS === "ios" && this.props.orientation.indexOf("P") === -1
        ? "flex-direction: column"
        : "flex-direction: row"};
      justify-content: space-between;
      background-color: #f5fcff;
      border: 1px solid green;
      ${Platform.OS === "ios" && this.props.orientation.indexOf("P") === -1
        ? "width: 90%"
        : "height: 90%"};
      ${Platform.OS === "ios" && this.props.orientation.indexOf("P") === -1
        ? "margin-top: 24"
        : "margin-left: 24"};
    `;
    const theStrings = [];
    for (let i = 0; i < this.props.noteArray.length; i++) theStrings.push();
    return (
      <Container>
        {this.props.noteArray.map((string, idx) => (
          <String
            key={`string_${idx}`}
            includesOpen={this.props.startFret}
            noteList={this.props.noteArray[idx]}
            orientation={this.props.orientation}
            stringNum={idx}
          />
        ))}
      </Container>
    );
  }
}
