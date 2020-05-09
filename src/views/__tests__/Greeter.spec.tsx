import React from 'react';
import { render } from '@testing-library/react';
import Greeter from '../Greeter';
import { contact } from '../../data';

describe('<Greeter />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Greeter data={contact} fileName="index.test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
