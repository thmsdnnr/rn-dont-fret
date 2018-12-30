/**
 * PrimaryAxisHR
 *
 * A PrimaryAxisHR is a view that spans the primary layout axis 100%
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

type Props = {};
export default class HR extends Component<Props> {
  render() {
    const HRStyle = styled.View`
      flex: 0;
      ${this.props.orientation.indexOf("P") !== -1
        ? "min-height: "
        : "min-width: "} ${this.props.size};
      background-color: ${this.props.color};
      ${this.props.orientation.indexOf("P") !== -1
        ? "width: 100%"
        : "height: 100%"};
      z-index: 1;
    `;
    return <HRStyle />;
  }
}
