import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Input} from '~/components/Atomics/Input';
import {defineMask} from '~/utils/masks';
import {IFormInput} from '~/components/FormInput/FormInput.types';
import {ITriggerFormInput} from '~/utils/interfaces';
import S from '~/components/FormInput/FormInput.styles';

export const FormInput = ({
  placeholder,
  onChange,
  value,
  onBlur,
  trigger,
  name,
  errors,
  secureTextEntry = false,
  ...rest
}: IFormInput.IView) => (
  <Div {...rest} testID={`FormInput`}>
    <S.Content borderColor={errors?.[name]?.message ? 'error' : 'black'}>
      <Input
        placeholder={String(placeholder)}
        value={String(value)}
        onBlur={onBlur}
        color={errors?.[name]?.message ? 'error' : 'neutral_900'}
        secureTextEntry={secureTextEntry}
        mask={defineMask(name)}
        onChangeText={(text: string) => {
          onChange(text);
          trigger(name as keyof ITriggerFormInput);
        }}
      />
    </S.Content>
    {errors?.[name]?.message && (
      <Text variant="infos" color="error">
        {errors?.[name]?.message}
      </Text>
    )}
  </Div>
);
