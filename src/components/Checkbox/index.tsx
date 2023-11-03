import * as React from 'react';
import {ICheckbox} from '~/components/Checkbox/Checkbox.types';
import S from '~/components/Checkbox/Checkbox.styles';
import {Check} from '~/assets/svgs';
import {Div} from '~/components/Atomics';

export const Checkbox = ({
  onChange,
  size = 24,
  checked = false,
}: ICheckbox.IView) => {
  return (
    <S.Container
      width={size}
      height={size}
      bg={checked ? 'blue_black' : 'transparent'}
      testID={`Checkbox`}
    >
      <Div onPress={onChange}>
        <Check width="16" height="16" color="white" />
      </Div>
    </S.Container>
  );
};
