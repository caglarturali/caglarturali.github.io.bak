import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Linkable } from './Linkable';

export interface NavLink extends Linkable {
  icon: IconProp;
  color: string;
}
