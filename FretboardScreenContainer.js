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
  screenOrientation: state.AppState.orientation
});

export default connect(
  mapStateToProps,
  null // no mapDispatchToProps
)(MainApp);
