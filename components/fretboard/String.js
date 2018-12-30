/**
 * String
 *
 * A String contains Notes and is contained by a Fretboard.
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
import generateNoteRange from "../../utils/NoteCalc.js";

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
    const noteRange = generateNoteRange(
      this.props.baseNote,
      this.props.startFret,
      this.props.numFrets
    );
    if (this.props.startFret === 0) {
      noteList.push(
        <Note
          key={`string_${this.props.stringNum}_note_open`}
          orientation={this.props.orientation}
          isOpen={true}
          noteValue={this.props.baseNote}
        />,
        <Nut key="open_nut" orientation={this.props.orientation} />
      );
    }
    for (let i = 0; i < this.props.numFrets; i++) {
      noteList.push(
        <Note
          key={`string_${this.props.stringNum}_note_${i}`}
          orientation={this.props.orientation}
          noteValue={noteRange[i]}
        />,
        <Fret
          key={`string_${this.props.stringNum}_fret_${i}`}
          orientation={this.props.orientation}
        />
      );
    }
    return <NoteContainer>{noteList}</NoteContainer>;
  }
}
