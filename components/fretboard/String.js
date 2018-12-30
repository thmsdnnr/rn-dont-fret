/**
 * String
 *
 * A String contains noteList and is contained by a Fretboard.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, View } from "react-native";
import Nut from "./Nut";
import Note from "./Note";
import Fret from "./Fret";
import styled from "styled-components/native";

type Props = {};
export default class String extends Component<Props> {
  render() {
    const NoteContainer = styled.View`
      flex: 1;
      ${Platform.OS === "ios" && this.props.orientation.indexOf("P") === -1
        ? "flex-direction: row"
        : "flex-direction: column"};
      justify-content: flex-start;
      align-items: center;
    `;
    const noteList = [];
    for (let i = 0; i < this.props.noteList.length; i++) {
      if (i === 0 && this.props.includesOpen === true) {
        noteList.push(
          <Note
            key={`string_${this.props.stringNum}_note_open`}
            orientation={this.props.orientation}
            isOpen={true}
            noteValue={this.props.noteList[0].note}
            isActive={this.props.noteList[0].isActive}
            isNameDisplayed={this.props.noteList[0].isNameDisplayed}
          />,
          <Nut key="open_nut" orientation={this.props.orientation} />
        );
      } else {
        noteList.push(
          <Note
            key={`string_${this.props.stringNum}_note_${i}`}
            orientation={this.props.orientation}
            noteValue={this.props.noteList[i].note}
            isActive={this.props.noteList[i].isActive}
            isNameDisplayed={this.props.noteList[i].isNameDisplayed}
          />,
          <Fret
            key={`string_${this.props.stringNum}_fret_${i}`}
            orientation={this.props.orientation}
          />
        );
      }
    }
    return <NoteContainer>{noteList}</NoteContainer>;
  }
}
