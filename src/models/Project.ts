import { Linkable } from './Linkable';

export interface Project extends Linkable {
  summary: string;
  tech: string[];
}
