/**
 * Nut
 *
 * A Nut is a "fret" that is the open string and is displayed at the
 * When in Portrait, will be horizontal 100%.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const NutStyle = styled.View`
  flex: 0;
  background-color: saddlebrown;
  position: absolute;
  min-height: 8;
  width: 100%;
  top: 0;
  z-index: 4;
`;

type Props = {};
export default class Nut extends Component<Props> {
  render() {
    return <NutStyle />;
  }
}
