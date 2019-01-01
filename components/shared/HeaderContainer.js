/**
 * HeaderContainer
 *
 * Redux container for NoteGuess component.
 * @format
 * @flow
 */

import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  isHeaderHidden: state.AppState.isHeaderHidden
});

export default connect(
  mapStateToProps,
  null
)(Header);
