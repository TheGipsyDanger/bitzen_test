import * as React from 'react';
import { ImageImput }from './';
import { render } from '@testing-library/react-native';

describe('Render ImageImput', () => {
  it('Should be ImageImput exist', () => {
    const { getByTestId } = render(<ImageImput />);
    const currentElement = getByTestId(`ImageImput`);
    expect(currentElement).toBeTruthy();
  });
});