/**
 * String
 *
 * A String contains Notes and is contained by a Fretboard.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import Nut from "./Nut";
import Note from "./Note";
import Fret from "./Fret";
import styled from "styled-components/native";

const NoteContainer = styled.View`
  flex: 1;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

const StringItself = styled.View`
  flex: 1;
  position: absolute;
  height: 100%;
  min-width: 3
  background-color: #cccccc;
`;

type Props = {};
export default class String extends Component<Props> {
  render() {
    const noteList = [];
    for (let i = this.props.startFret; i < this.props.endFret; i++) {
      noteList.push(<Note key={`string_${this.props.stringNum}_note_${i}`} />);
      noteList.push(<Fret key={`string_${this.props.stringNum}_fret_${i}`} />);
    }
    return (
      <NoteContainer>
        {noteList}
        <StringItself />
      </NoteContainer>
    );
  }
}
