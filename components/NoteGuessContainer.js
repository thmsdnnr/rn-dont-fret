/**
 * NoteGuessContainer
 *
 * Redux container for NoteGuess component.
 * @format
 * @flow
 */

import { connect } from 'react-redux';
import NoteGuess from './NoteGuess';

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
