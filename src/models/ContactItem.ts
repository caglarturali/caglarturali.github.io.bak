import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Linkable } from './Linkable';

export interface ContactItem extends Linkable {
  icon: IconProp;
  isMain?: boolean;
}
