import { Linkable } from './Linkable';

export interface ContactItem extends Linkable {
  name: string;
  icon: string | string[];
  url: string;
  isMain?: boolean;
  badge?: any;
}
