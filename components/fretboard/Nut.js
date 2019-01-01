/**
 * Nut
 *
 * A Nut is a "fret" that is the open string and is displayed at the
 * When in Portrait, will be horizontal 100%.
 * TODO: When in Landscape, will be vertical 100%.
 * @format
 * @flow
 */

import React from 'react';
import HR from '../generics/PrimaryAxisHR';

export default function Nut(props) {
  const { orientation } = props;
  return <HR color="saddlebrown" orientation={orientation} size={8} />;
}
