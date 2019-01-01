/**
 * Fret
 *
 * A Fret is a view that is placed between notes on a string.
 * When in Portrait, will be horizontal 100%.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React from 'react';
import HR from '../generics/PrimaryAxisHR';

export default function Fret(props) {
  const { orientation } = props;
  return <HR color="gold" orientation={orientation} size={4} />;
}
