export declare namespace LocalCache {
  export interface Record<T extends unknown> {
    lastChecked: number;
    data: T;
  }

  export interface Prop {
    timeout?: number;
  }
}
