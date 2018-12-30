/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { SafeAreaView, Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import Orientation from "react-native-orientation-locker";

import Fretboard from "./components/fretboard/Fretboard";
import NoteGuess from "./components/NoteGuess";

const StyledSafe = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  flex-direction: row;
  border: 1px solid red;
  padding-left: 24;
  padding-right: 24;
`;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  _onOrientationDidChange = orientation => {
    if (orientation !== this.state.screenOrientation) {
      this.setState({ screenOrientation: orientation });
    }
  };

  componentWillMount() {
    var initial = Orientation.getInitialOrientation();
    this.setState({ screenOrientation: initial });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }

  componentWillUnmount = () => {
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  };

  render() {
    const tuning = ["E2", "A2", "D3", "G3", "B3", "E4"]; // low string to low string, 6 -> 1
    return (
      <StyledSafe>
        <Fretboard tuning={tuning} startFret={0} endFret={12} />
        <NoteGuess />
      </StyledSafe>
    );
  }
}
