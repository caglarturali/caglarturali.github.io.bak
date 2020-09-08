import React from 'react';
import { render } from '@testing-library/react';
import Diploma from '../Diploma';
import diplomaData from '../../data/json/diploma.json';
import staticData from '../../data/json/static.json';

describe('<Diploma />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Diploma diplomaData={diplomaData} staticData={staticData} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
