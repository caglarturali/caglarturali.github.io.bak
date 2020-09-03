import React from 'react';
import { render } from '@testing-library/react';
import Greeter from '../Greeter';

describe('<Greeter />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Greeter fileName="index.test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
