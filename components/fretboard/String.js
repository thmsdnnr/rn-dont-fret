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
    const orientation = this.props.orientation;
    for (let i = 0; i < this.props.noteList.length; i++) {
      const {
        note,
        isHighlighted,
        highlightColor,
        isNameDisplayed
      } = this.props.noteList[i];
      const noteKey = `string_${this.props.stringNum}_note_${i}`;
      if (i === 0 && this.props.includesOpen === true) {
        noteList.push(
          <Note
            key={noteKey}
            orientation={orientation}
            isOpen={true}
            noteValue={note}
            isHighlighted={isHighlighted}
            highlightColor={highlightColor}
            isNameDisplayed={isNameDisplayed}
          />,
          <Nut key="open_nut" orientation={orientation} />
        );
      } else {
        noteList.push(
          <Note
            key={noteKey}
            orientation={orientation}
            isOpen={false}
            noteValue={note}
            isHighlighted={isHighlighted}
            highlightColor={highlightColor}
            isNameDisplayed={isNameDisplayed}
          />,
          <Fret
            key={`string_${this.props.stringNum}_fret_${i}`}
            orientation={orientation}
          />
        );
      }
    }
    return <NoteContainer>{noteList}</NoteContainer>;
  }
}
