/**
 * Note
 *
 * A Note is the smallest unit on a Fretboard and is contained inside a String.
 * TODO: background color options
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

type Props = {};
export default class Note extends Component<Props> {
  render() {
    const StyledView = styled.View`
      flex: 1;
      min-height: 42;
      min-width: 42;
      background-color: ${this.props && this.props.isActive === true
        ? "#000000;"
        : "#ffffff"};
    `;
    return <StyledView />;
  }
}
