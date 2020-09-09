export declare namespace DiplomaTypes {
  export interface Curriculum {
    terms: Semester[];
    optional: Book[];
  }

  export interface Semester {
    name: string;
    courses: Course[];
  }

  export interface Course {
    courseName: string;
    books: Book[];
  }

  export interface Book {
    name: string;
    url: string;
    coverImg: string;
    startDate: string;
    endDate: string;
    progress: number;
  }
}
