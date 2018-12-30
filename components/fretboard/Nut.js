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
import { View } from "react-native";
import HR from "../generics/PrimaryAxisHR";

type Props = {};
export default class Nut extends Component<Props> {
  render() {
    return (
      <HR color="saddlebrown" orientation={this.props.orientation} size={8} />
    );
  }
}
