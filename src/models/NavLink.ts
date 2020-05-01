import React from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Linkable } from './Linkable';

export interface NavLink extends Linkable {
  icon: IconProp;
  size?: SizeProp;
  color: string;
  component?: React.ReactElement;
}
