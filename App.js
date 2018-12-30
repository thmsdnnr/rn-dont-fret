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

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  _onOrientationDidChange = orientation => {
    if (this._oMap[orientation] !== this.state.screenOrientation) {
      this.setState({ screenOrientation: this._oMap[orientation] });
    }
  };

  _oMap = {
    "PORTRAIT": "P",
    "PORTRAIT-UPSIDEDOWN": "PU",
    "LANDSCAPE-LEFT": "LL",
    "LANDSCAPE-RIGHT": "LR"
  };

  componentWillMount() {
    var initial = Orientation.getInitialOrientation();
    this.setState({ screenOrientation: this._oMap[initial] });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }

  componentWillUnmount = () => {
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  };

  render() {
    const StyledSafe = styled.SafeAreaView`
      flex: 1;
      align-items: center;
      ${Platform.OS === 'ios' && this.state.screenOrientation.indexOf("P") === -1
        ? "flex-direction: column"
        : "flex-direction: row"};
      ${Platform.OS !== 'ios' ? "flex-direction: row" : ""};
      border: 1px solid red;
      padding-left: 24;
      padding-right: 24;
      margin-left: 24;
      flex-wrap: wrap;
    `;
    let tuning = ["E2", "A2", "D3", "G3", "B3", "E4"]; // low string to low string, 6 -> 1
    // if (this.state.screenOrientation.indexOf("P") === -1)
      // tuning = tuning.reverse();
    return (
      <StyledSafe>
        <Fretboard
          orientation={this.state.screenOrientation}
          tuning={tuning}
          startFret={0}
          numFrets={12}
        />
        <NoteGuess orientation={this.state.screenOrientation} />
      </StyledSafe>
    );
  }
}
