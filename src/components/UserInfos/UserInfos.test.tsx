import * as React from 'react';
import { UserInfos }from './';
import { render } from '@testing-library/react-native';

describe('Render UserInfos', () => {
  it('Should be UserInfos exist', () => {
    const { getByTestId } = render(<UserInfos />);
    const currentElement = getByTestId(`UserInfos`);
    expect(currentElement).toBeTruthy();
  });
});