import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<ProgressBar value={80} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
