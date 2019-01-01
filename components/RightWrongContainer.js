/**
 * RightWrongCnotainer
 *
 * Redux container for RightWrong component to display count of correct / incorrect guesses.
 * @format
 * @flow
 */

import { connect } from 'react-redux';
import RightWrong from './RightWrong';

const mapStateToProps = state => ({
  orientation: state.AppState.orientation,
  rightCount: state.TrainingSession.rightCount,
  wrongCount: state.TrainingSession.wrongCount
});

export default connect(
  mapStateToProps,
  null // no mapDispatchToProps
)(RightWrong);
