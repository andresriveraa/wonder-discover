import { render } from '@testing-library/react';

import Discover from './discover';

describe('Discover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Discover />);
    expect(baseElement).toBeTruthy();
  });
});
