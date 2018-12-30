/**
 * NoteGuess
 *
 * A NoteGuess contains note options to click on.
 * TODO: When in Landscape, will be horizontal, not vertical.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const RightWrongView = styled.View`
  flex: 1;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4;
  width: 48
  height: 48;
`;

// TODO: show an SVG for right/wrong font

type Props = {};
export default class RightWrong extends Component<Props> {
  render() {
    if (this.props && this.props.display && this.props.displayValue) {
      return (
        <RightWrongView>
          <Text>{this.props.displayValue}</Text>
        </RightWrongView>
      );
    } else {
      return <RightWrongView />
    }
  }
}
