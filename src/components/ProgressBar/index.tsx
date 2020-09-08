/**
 * ProgressBar component.
 */
import React from 'react';
import Color from 'color';
import { bgMidBlue, green } from '../../theme';

export interface ProgressBarProps {
  progress: number;
  color?: string;
  bgColor?: string;
  width?: number;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = green,
  bgColor = Color(bgMidBlue).lighten(0.125).string(),
  width = 480,
  height = 3,
}) => {
  const containerStyles = {
    width,
    height,
    backgroundColor: bgColor,
    marginTop: '3px',
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: color,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
