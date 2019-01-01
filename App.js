/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills!
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components/native';
import Orientation from 'react-native-orientation-locker';

import FretboardContainer from './components/fretboard/FretboardContainer';
import NoteGuessContainer from './components/NoteGuessContainer';
import store from './store/store';

type Props = {};
export default class App extends Component<Props> {
  orientationMap = {
    PORTRAIT: 'P',
    'PORTRAIT-UPSIDEDOWN': 'PU',
    'LANDSCAPE-LEFT': 'LL',
    'LANDSCAPE-RIGHT': 'LR'
  };

  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
    this.setState({ screenOrientation: this.orientationMap[initial] });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this.onOrientationDidChange);
    setInterval(() => {
      store.dispatch({
        type: 'NOTE_ON',
        stringIdx: Math.floor(Math.random() * 6),
        fretIdx: Math.floor(Math.random() * 12)
      });
    }, 2500);
  }

  onOrientationDidChange = orientation => {
    store.dispatch({
      type: 'DEVICE_ROTATE',
      orientation: this.orientationMap[orientation]
    });
  };

  componentWillUnmount = () => {
    Orientation.removeOrientationListener(this.onOrientationDidChange);
  };

  render() {
    const { screenOrientation } = this.state;
    const StyledSafe = styled.SafeAreaView`
      flex: 1;
      align-items: center;
      ${Platform.OS === 'ios' && screenOrientation.indexOf('P') === -1
        ? 'flex-direction: column'
        : 'flex-direction: row'};
      ${Platform.OS !== 'ios' ? 'flex-direction: row' : ''};
      border: 1px solid red;
      padding-left: 24;
      padding-right: 24;
      margin-left: 24;
      flex-wrap: wrap;
    `;
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
