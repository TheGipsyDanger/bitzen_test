import * as React from 'react';
import { TabIcon }from './';
import { render } from '@testing-library/react-native';

describe('Render TabIcon', () => {
  it('Should be TabIcon exist', () => {
    const { getByTestId } = render(<TabIcon />);
    const currentElement = getByTestId(`TabIcon`);
    expect(currentElement).toBeTruthy();
  });
});