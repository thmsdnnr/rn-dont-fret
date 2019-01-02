/**
 * FretboardScreenContainer
 *
 * Redux container for FretboardScreen component.
 * @format
 * @flow
 */

import { connect } from 'react-redux';
import MainApp from './MainApp';

const mapStateToProps = state => ({
  screenOrientation: state.AppState.orientation,
  noteToGuess: state.Note.noteToGuess
});

const mapDispatchToProps = dispatch => ({
  dispatch: obj => dispatch(obj),
  notePressed: note => {
    dispatch({ type: 'NOTE_PRESSED', note });
  },
  randomNote: () => {
    dispatch({ type: 'RANDOM_NOTE_ON' });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps // no mapDispatchToProps
)(MainApp);
