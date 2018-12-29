/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import Orientation from "react-native-orientation-locker";

import Fretboard from "./components/fretboard/Fretboard";

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
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
    return (
      <StyledContainer>
        <Fretboard tuning={"EADGBE"} startFret={0} endFret={12} />
      </StyledContainer>
    );
  }
}
