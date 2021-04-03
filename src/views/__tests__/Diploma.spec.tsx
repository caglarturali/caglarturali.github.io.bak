import React from 'react';
import { render } from '@testing-library/react';
import Diploma from '../Diploma';
import sweData from '../../data/json/swe.json';
import staticData from '../../data/json/static.json';

// Workaround for react-tooltip's randomly generated UUIDs.
// https://github.com/wwayne/react-tooltip/issues/562
jest.mock('crypto', () => ({
  randomBytes: (num: number) => new Array(num).fill(0),
}));

describe('<Diploma />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Diploma diplomaData={sweData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
