import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container';

describe('<Container />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <Container
        title="Test Title"
        subtitle="Test Subtitle"
        seo={{
          title: 'Test SEO Title',
          description: 'Test SEO Description',
        }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
