/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills!
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components/native';
import FretboardContainer from './components/fretboard/FretboardContainer';
import NoteGuessContainer from './components/NoteGuessContainer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { screenOrientation } = this.props;
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
      <StyledSafe>
        <NoteGuessContainer row={1} />
        <FretboardContainer />
        <NoteGuessContainer row={2} />
      </StyledSafe>
    );
  }
}
