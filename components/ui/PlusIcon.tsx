import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PlusIcon = ({ size = 28, color = '#fff', ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 5v14M5 12h14"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
