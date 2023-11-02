import * as React from 'react';
import { ResetPasswordConfirmation }from './';
import { render } from '@testing-library/react-native';

describe('Render ResetPasswordConfirmation', () => {
  it('Should be ResetPasswordConfirmation exist', () => {
    const { getByTestId } = render(<ResetPasswordConfirmation />);
    const currentElement = getByTestId(`ResetPasswordConfirmation`);
    expect(currentElement).toBeTruthy();
  });
});