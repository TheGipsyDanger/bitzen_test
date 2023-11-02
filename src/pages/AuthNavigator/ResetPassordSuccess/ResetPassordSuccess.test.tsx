import * as React from 'react';
import { ResetPassordSuccess }from './';
import { render } from '@testing-library/react-native';

describe('Render ResetPassordSuccess', () => {
  it('Should be ResetPassordSuccess exist', () => {
    const { getByTestId } = render(<ResetPassordSuccess />);
    const currentElement = getByTestId(`ResetPassordSuccess`);
    expect(currentElement).toBeTruthy();
  });
});