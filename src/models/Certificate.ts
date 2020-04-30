import { Linkable } from './Linkable';

export interface Certificate<T extends unknown> extends Linkable {
  totalCourses: number;
  earned: T[];
}
