import { Page } from './Page';

export interface BaseProps<T extends unknown> {
  data: Page<T>;
  fileName: string;
}
