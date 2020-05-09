import React from 'react';
import { render } from '@testing-library/react';
import ButtonLink from '../ButtonLink';

describe('<ButtonLink />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <ButtonLink
        text="turali.js.org"
        title="turali.js.org"
        href="https://turali.js.org"
        icon={{
          prefix: 'fas',
          iconName: 'coffee',
        }}
        size="lg"
        showCount={false}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
