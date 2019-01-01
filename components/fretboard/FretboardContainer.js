import { connect } from 'react-redux';
import Fretboard from './Fretboard';
import React from 'react';

const mapStateToProps = state => {
  const { AppState, Note } = state;
  const { tuning, includesOpen, noteArray, startFret, numFrets } = Note;
  const { orientation } = AppState;
  return {
    tuning,
    includesOpen,
    noteArray,
    startFret,
    numFrets,
    orientation
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
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
