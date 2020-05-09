import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../Skills';
import { skills } from '../../data';

describe('<Skills />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Skills data={skills} fileName="skills.test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
