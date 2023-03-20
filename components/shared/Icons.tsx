import Svg, { Circle, G, Line, Path, Polygon, Rect } from "react-native-svg";

import React from "react";
import theme from "../../constants/themes/darkTheme";

export const Icons = {
  Basic: (focused: boolean) => (
    <Svg viewBox="0 0 24 24">
      <G
        stroke={focused ? theme.COLOR_TEXT_NEGATIVE : theme.COLOR_TEXT}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <Line x1="3" x2="21" y1="12" y2="12" />
        <Line x1="12" x2="12" y1="3" y2="21" />
        <Line x1="16.5" x2="19.5" y1="4.5" y2="7.5" />
        <Line x1="19.5" x2="16.5" y1="4.5" y2="7.5" />
        <Line x1="6" x2="6" y1="4" y2="8" />
        <Line x1="4" x2="8" y1="6" y2="6" />
        <Line x1="18" x2="18.01" y1="16" y2="16" />
        <Line x1="18" x2="18.01" y1="20" y2="20" />
        <Line x1="4" x2="8" y1="18" y2="18" />
      </G>
    </Svg>
  ),
  Memory: (focused: boolean) => (
    <Svg viewBox="0 0 24 24">
      <G
        stroke={focused ? theme.COLOR_TEXT_NEGATIVE : theme.COLOR_TEXT}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <Rect height="14" rx="1" width="14" x="5" y="5" />
        <Path d="M9 9h6v6h-6z" />
        <Path d="M3 10h2" />
        <Path d="M3 14h2" />
        <Path d="M10 3v2" />
        <Path d="M14 3v2" />
        <Path d="M21 10h-2" />
        <Path d="M21 14h-2" />
        <Path d="M14 21v-2" />
        <Path d="M10 21v-2" />
      </G>
    </Svg>
  ),
  Percent: (focused: boolean) => (
    <Svg viewBox="0 0 24 24">
      <G
        stroke={focused ? theme.COLOR_TEXT_NEGATIVE : theme.COLOR_TEXT}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <Line x1="9" x2="15" y1="14" y2="8" />
        <Circle
          cx="9.5"
          cy="8.5"
          fill={focused ? theme.COLOR_TEXT_NEGATIVE : theme.COLOR_TEXT}
          r=".5"
        />
        <Circle
          cx="14.5"
          cy="13.5"
          fill={focused ? theme.COLOR_TEXT_NEGATIVE : theme.COLOR_TEXT}
          r=".5"
        />
        <Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
      </G>
    </Svg>
  ),
  Arrow: (
    <Svg viewBox="0 0 16 16" fill={theme.COLOR_TEXT}>
      <Polygon
        fill-rule="evenodd"
        points="9.586 8 4.293 2.707 5.707 1.293 12.414 8 5.707 14.707 4.293 13.293"
      />
    </Svg>
  ),
};
