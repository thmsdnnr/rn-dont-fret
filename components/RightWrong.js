/**
 * RightWrong
 *
 * A RightWrong displays a visual indicator of the correctness of a note guess.
 * @format
 * @flow
 */

import React from 'react';
import { Platform, View, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CountText = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 24;
  margin-left: 8;
  margin-right: 36;
`;

const androidNoteTextRotateRule = {
  LL: 'rotate(90deg)',
  LR: 'rotate(-90deg)'
};

export default function RightWrong(props) {
  const { rightCount, wrongCount, orientation } = props;
  const RightWrongView = styled.View`
    flex: 0.2;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-left: 36;
    margin-bottom: 16;
    ${Platform.OS !== 'ios' &&
    androidNoteTextRotateRule[orientation] !== undefined
      ? `transform: ${
          androidNoteTextRotateRule[orientation]
        }; flex-flow: column;`
      : ''}
  `;
  return (
    <RightWrongView>
      <Icon name="check" size={42} color="#090" />
      <CountText>{rightCount || 0}</CountText>
      <Icon name="times" size={42} color="#900" />
      <CountText>{wrongCount || 0}</CountText>
    </RightWrongView>
  );
}
