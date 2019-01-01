import { connect } from 'react-redux';
import NoteGuess from './NoteGuess';
import React from 'react';

const mapStateToProps = state => ({
  orientation: state.AppState.orientation
});

const mapDispatchToProps = dispatch => ({
  onClick: note => {
    dispatch({ type: 'CHOOSE_NOTE', note });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteGuess);
