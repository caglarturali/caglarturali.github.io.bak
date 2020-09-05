import React from 'react';
import { render } from '@testing-library/react';
import MDPage from '../MDPage';

describe('<MDPage />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<MDPage fileName="skills" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
