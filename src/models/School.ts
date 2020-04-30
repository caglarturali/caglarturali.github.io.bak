export interface School {
  name: string;
  department: string;
  degree: string;
  years: {
    start: number;
    end?: number;
  };
}
