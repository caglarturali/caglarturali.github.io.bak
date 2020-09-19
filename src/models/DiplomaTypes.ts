export declare namespace DiplomaTypes {
  export interface Book {
    isbn: string[];
    progress: number;
    static?: {
      title: string;
      thumbnail?: string;
      link?: string;
    };
  }

  export interface Course {
    courseName: string;
    books: Book[];
  }

  export interface Semester {
    name: string;
    courses: Course[];
  }

  export interface Extra {
    name: string;
    books: Book[];
  }

  export interface Curriculum {
    terms: Semester[];
    extras: Extra[];
  }
}
