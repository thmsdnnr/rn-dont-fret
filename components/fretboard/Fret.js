/**
 * Fret
 *
 * A Fret is a view that is placed between notes on a string.
 * When in Portrait, will be horizontal 100%.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const FretStyle = styled.View`
  flex: 0;
  min-height: 4;
  background-color: gold;
  width: 100%;
  z-index: 1;
`;

type Props = {};
export default class Fret extends Component<Props> {
  render() {
    return <FretStyle />;
  }
}
