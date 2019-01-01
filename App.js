/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills!
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Orientation from 'react-native-orientation-locker';

import HeaderContainer from './components/shared/HeaderContainer';
import FretboardContainer from './components/fretboard/FretboardContainer';
import NoteGuessContainer from './components/NoteGuessContainer';
import RightWrongContainer from './components/RightWrongContainer';

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
    if (this.orientationMap[orientation].indexOf('P') === -1) {
      store.dispatch({ // Hide the header in landscape mode.
        type: 'HEADER_HIDE'
      });
    } else {
      store.dispatch({
        type: 'HEADER_SHOW'
      });
    }
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
      justify-content: center;
      ${Platform.OS === 'ios' && screenOrientation.indexOf('P') === -1
        ? 'flex-direction: column'
        : 'flex-direction: row'};
      ${Platform.OS !== 'ios' && screenOrientation.indexOf('P') === -1
        ? 'flex-direction: row'
        : 'flex-direction: row'};
      flex-wrap: nowrap;
      padding-top: 36;
    `;
    return (
      <Provider store={store}>
        <HeaderContainer />
        <StyledSafe>
          <NoteGuessContainer row={1} />
          <FretboardContainer />
          <NoteGuessContainer row={2} />
        </StyledSafe>
        <RightWrongContainer />
      </Provider>
    );
  }
}
