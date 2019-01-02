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
  margin-left: 36;
  margin-right: 36;
  color: #000000;
`;

export default function RightWrong(props) {
  const { rightCount, wrongCount, orientation } = props;
  return (
    <Text style={{ height: 36 }}>
      <Icon name="check" size={32} color="#090" />
      <CountText>{rightCount || 0}</CountText>
      <Icon name="times" size={32} color="#900" />
      <CountText>{wrongCount || 0}</CountText>
    </Text>
  );
}
