import React from 'react';
import { render } from '@testing-library/react';
import Certificates from '../Certificates';
import { certificates } from '../../data';

describe('<Certificates />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Certificates data={certificates} fileName="certificates.test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
