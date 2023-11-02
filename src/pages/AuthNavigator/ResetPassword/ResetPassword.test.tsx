import * as React from 'react';
import { ResetPassword }from './';
import { render } from '@testing-library/react-native';

describe('Render ResetPassword', () => {
  it('Should be ResetPassword exist', () => {
    const { getByTestId } = render(<ResetPassword />);
    const currentElement = getByTestId(`ResetPassword`);
    expect(currentElement).toBeTruthy();
  });
});