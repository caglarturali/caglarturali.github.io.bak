import React from 'react';
import { render } from '@testing-library/react';
import MDTab from '../MDTab';

describe('<MDPage />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<MDTab fileName="skills" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
