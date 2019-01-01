/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import { SafeAreaView, Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import Orientation from "react-native-orientation-locker";

import FretboardContainer from "./components/fretboard/FretboardContainer";
import NoteGuessContainer from "./components/NoteGuessContainer";
import store from "./store/store";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  _onOrientationDidChange = orientation => {
    store.dispatch({
      type: "DEVICE_ROTATE",
      orientation: this._oMap[orientation]
    });
  };

  _oMap = {
    PORTRAIT: "P",
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
    setInterval(() => {
      store.dispatch({
        type: "NOTE_ON",
        stringIdx: Math.floor(Math.random() * 6),
        fretIdx: Math.floor(Math.random() * 12)
      });
    }, 2500);
  }

  componentWillUnmount = () => {
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  };

  render() {
    const StyledSafe = styled.SafeAreaView`
      flex: 1;
      align-items: center;
      ${Platform.OS === "ios" &&
      this.state.screenOrientation.indexOf("P") === -1
        ? "flex-direction: column"
        : "flex-direction: row"};
      ${Platform.OS !== "ios" ? "flex-direction: row" : ""};
      border: 1px solid red;
      padding-left: 24;
      padding-right: 24;
      margin-left: 24;
      flex-wrap: wrap;
    `;
    let tuning = ["E2", "A2", "D3", "G3", "B3", "E4"]; // low string to low string, 6 -> 1
    return (
      <StyledSafe>
        <Provider store={store}>
          <FretboardContainer />
          <NoteGuessContainer />
        </Provider>
      </StyledSafe>
    );
  }
}
