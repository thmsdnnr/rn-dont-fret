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
import generateNoteRange from "../../utils/NoteCalc.js";
import styled from "styled-components/native";

type Props = {};
export default class Fretboard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      tuning: this.props.tuning,
      noteArray: this.props.tuning.map((note, idx) =>
        generateNoteRange(note, this.props.startFret, this.props.numFrets).map(
          n => {
            return {
              note: n,
              isActive: false,
              isNameDisplayed: false
            };
          }
        )
      )
    };
  }

  _toggleNoteParam = (stringIdx, fretIdx, paramName) => {
    const newNoteArray = this.state.noteArray.slice();
    newNoteArray[stringIdx][fretIdx][paramName] = !newNoteArray[stringIdx][
      fretIdx
    ][paramName];
    this.setState({ noteArray: newNoteArray });
  };

  _toggleNoteName = (stringIdx, fretIdx) => {
    this._toggleNoteParam(stringIdx, fretIdx, "isNameDisplayed");
  };

  _toggleNoteActive = (stringIdx, fretIdx) => {
    this._toggleNoteParam(stringIdx, fretIdx, "isActive");
  };

  _randomString = () => Math.floor(Math.random() * this.state.noteArray.length);
  _randomNoteOnString = stringIdx =>
    Math.floor(Math.random() * this.state.noteArray[stringIdx].length);

  componentDidMount = () => {
    const interval = setInterval(() => {
      const randString = this._randomString();
      const randNote = this._randomNoteOnString(randString);
      this._toggleNoteActive(randString, randNote);
    }, 2000);
    this.setState({
      interval: interval
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  };

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
    const numStrings = this.props.tuning.length || 0;
    const theStrings = [];
    for (let i = 0; i < this.state.noteArray.length; i++)
      theStrings.push(
        <String
          key={`string_${i}`}
          includesOpen={this.props.startFret === 0}
          noteList={this.state.noteArray[i]}
          orientation={this.props.orientation}
          stringNum={i}
        />
      );
    return <Container>{theStrings}</Container>;
  }
}
