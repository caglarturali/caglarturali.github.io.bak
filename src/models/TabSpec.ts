import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Linkable } from './Linkable';

export interface TabSpec extends Linkable {
  icon: IconProp;
  size?: SizeProp;
  color: string;
}
