import * as React from 'react';
import { Register }from './';
import { render } from '@testing-library/react-native';

describe('Render Register', () => {
  it('Should be Register exist', () => {
    const { getByTestId } = render(<Register />);
    const currentElement = getByTestId(`Register`);
    expect(currentElement).toBeTruthy();
  });
});