export interface Page<T extends unknown = {}> {
  name: string;
  desc?: string;
  content: T[];
}
