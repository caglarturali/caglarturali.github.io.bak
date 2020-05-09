import React from 'react';
import { render } from '@testing-library/react';
import Education from '../Education';
import { education } from '../../data';

describe('<Education />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Education data={education} fileName="education.test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
