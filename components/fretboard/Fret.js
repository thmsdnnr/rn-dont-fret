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
import HR from "../generics/PrimaryAxisHR";

type Props = {};
export default class Fret extends Component<Props> {
  render() {
    return <HR color="gold" orientation={this.props.orientation} size={4} />;
  }
}
