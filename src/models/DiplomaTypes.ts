export declare namespace DiplomaTypes {
  export interface Section {
    title: string;
    url: string;
    progress: {
      completed: number;
      total: number;
    };
  }

  export interface Course {
    courseName: string;
    sections: Section[];
  }

  export interface Semester {
    name: string;
    dates: {
      start: string;
      end: string;
    };
    courses: Course[];
  }

  export interface Extra {
    name: string;
    sections: Section[];
  }

  export interface Curriculum {
    semesters: Semester[];
    extras: Extra[];
  }
}
