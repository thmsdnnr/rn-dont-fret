import React, { Component } from "react";
import { connect } from "react-redux";
import Fretboard from "./Fretboard";

const mapStateToProps = state => ({
  tuning: state.tuning,
  includesOpen: state.includesOpen,
  noteArray: state.noteArray,
  orientation: state.orientation,
  startFret: state.startFret
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  },
  reset: () => {
    dispatch({ type: "RESET" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard);
