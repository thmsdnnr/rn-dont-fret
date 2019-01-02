/**
 * FretboardContainer
 *
 * Redux container for Fretboard component.
 * @format
 * @flow
 */

import { connect } from 'react-redux';
import Fretboard from './Fretboard';

const mapStateToProps = state => {
  const { AppState, Note } = state;
  const {
    tuning,
    includesOpen,
    noteArray,
    startFret,
    numFrets,
    noteToGuess
  } = Note;
  const { orientation } = AppState;
  return {
    tuning,
    includesOpen,
    noteArray,
    startFret,
    numFrets,
    noteToGuess,
    orientation
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch: (action, obj) => {
    dispatch({ type: action }, obj);
  },
  notePressed: note => {
    dispatch({ type: 'NOTE_PRESSED', note });
  },
  randomNote: () => {
    dispatch({ type: 'RANDOM_NOTE_ON' });
  },
  decrement: () => {
    dispatch({ type: 'DECREMENT' });
  },
  reset: () => {
    dispatch({ type: 'RESET' });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard);
