/**
 * Don't Fret
 * Learn the fretboard and improve your stringed skills!
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { View, SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components/native';
import FretboardContainer from './components/fretboard/FretboardContainer';
import NoteGuessContainer from './components/NoteGuessContainer';
import RightWrongContainer from './components/RightWrongContainer';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      notesToTrain: 5
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'RANDOM_NOTE_TO_GUESS'
    });
  }

  handleNotePress = note => {
    const { dispatch, noteToGuess } = this.props;
    if (note.noteName === noteToGuess.noteName) {
      dispatch({ type: 'INCREMENT_RIGHT_COUNT' });
      const { notesToTrain } = this.state;
      const notesLeft = notesToTrain - 1;
      if (notesLeft > 0) {
        this.setState({ notesToTrain: notesLeft });
        this.newRandomNote();
      } else {
        console.log('DONE!');
      }
    } else {
      dispatch({ type: 'INCREMENT_WRONG_COUNT' });
    }
  };

  newRandomNote() {
    const { dispatch } = this.props;
    dispatch({
      type: 'RANDOM_NOTE_TO_GUESS'
    });
  }

  render() {
    const { screenOrientation, noteToGuess } = this.props;
    const { noteName } = noteToGuess;
    const StyledSafe = styled.SafeAreaView`
      flex: 1;
      flex-direction: column;
      flex-wrap: wrap;
      padding-top: 36;
    `;
    const HUD = styled.View`
      height: 48;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 4;
      justify-content: space-between;
      align-items: flex-end;
    `;
    return (
      <StyledSafe>
        <HUD>
          <Text h3>Find {noteName}</Text>
          <RightWrongContainer />
        </HUD>
        <FretboardContainer onPress={this.handleNotePress} />
      </StyledSafe>
    );
  }
}
