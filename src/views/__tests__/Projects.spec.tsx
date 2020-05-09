import React from 'react';
import { render } from '@testing-library/react';
import Projects from '../Projects';
import { projects } from '../../data';

describe('<Projects />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Projects data={projects} fileName="projects.test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
