export declare namespace DiplomaTypes {
  export interface Curriculum {
    terms: Semester[];
    extras: Extra[];
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
    isbn: string[];
    title?: string;
    progress: number;
  }

  export interface Extra {
    name: string;
    books: Book[];
  }
}
