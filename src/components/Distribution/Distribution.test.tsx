import * as React from 'react';
import { Distribution }from './';
import { render } from '@testing-library/react-native';

describe('Render Distribution', () => {
  it('Should be Distribution exist', () => {
    const { getByTestId } = render(<Distribution />);
    const currentElement = getByTestId(`Distribution`);
    expect(currentElement).toBeTruthy();
  });
});