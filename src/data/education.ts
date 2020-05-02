import { Page, School } from '../models';

export const education: Page<School> = {
  name: 'education',
  desc: 'My academic background',
  content: [
    {
      name: 'Kirikkale University',
      department: 'Computer Education and Instructional Technologies',
      degree: "Bachelor's Degree",
      years: {
        start: 2010,
        end: 2017,
      },
    },
    {
      name: 'Kirikkale University',
      department: 'Physics',
      degree: '[Dropout]',
      years: {
        start: 2008,
        end: 2010,
      },
    },
  ],
};
