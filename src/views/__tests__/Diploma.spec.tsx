import React from 'react';
import { render } from '@testing-library/react';
import Diploma from '../Diploma';
import diplomaData from '../../data/json/diploma.json';

describe('<Greeter />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Diploma diplomaData={diplomaData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
