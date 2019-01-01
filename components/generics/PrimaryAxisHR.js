/**
 * PrimaryAxisHR
 *
 * A PrimaryAxisHR is a view that spans the primary layout axis 100%
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export default function HR(props) {
  const { size, orientation, color } = props;
  const HRStyle = styled.View`
    flex: 0;
    ${Platform.OS === 'ios' && orientation.indexOf('P') !== -1
      ? `min-height: ${size}`
      : `min-width: ${size}`};
    background-color: ${color};
    ${orientation.indexOf('P') !== -1 ? 'width: 100%' : 'height: 100%'};
    ${Platform.OS !== 'ios' ? `min-height: ${size};` : ''};
    ${Platform.OS !== 'ios' ? `width: 100%;` : ''};
    z-index: 1;
  `;
  return <HRStyle />;
}
