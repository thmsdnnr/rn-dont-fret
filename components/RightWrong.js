/**
 * RightWrong
 *
 * A RightWrong displays a visual indicator of the correctness of a note guess.
 * @format
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

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
export default function RightWrong(props) {
  const { display, displayValue } = props;
  return (
    display &&
    displayValue && (
      <RightWrongView>
        <Text>{this.props.displayValue}</Text>
      </RightWrongView>
    )
  );
}
