export declare namespace DiplomaTypes {
  export interface CourseBook {
    isbn: string[];
  }

  export interface BookMetadata extends CourseBook {
    title: string;
    subtitle?: string;
    thumbnail: string;
    link: string;
  }

  export interface Progress extends CourseBook {
    progress: number;
  }

  export interface Course {
    courseName: string;
    books: CourseBook[];
  }

  export interface Semester {
    name: string;
    courses: Course[];
  }

  export interface Extra {
    name: string;
    books: CourseBook[];
  }

  export interface Curriculum {
    terms: Semester[];
    extras: Extra[];
  }
}
