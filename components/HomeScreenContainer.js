/**
 * HomeScreenContainer
 *
 * Redux container for HomeScreen component.
 * @format
 * @flow
 */

import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';

const mapStateToProps = state => ({
  orientation: state.AppState.orientation
});

const mapDispatchToProps = dispatch => ({
  update: payload => {
    dispatch({ type: 'UPDATE_NOTE_ARRAY', ...payload });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
