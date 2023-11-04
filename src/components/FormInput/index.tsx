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
  prepend,
  append,
  multiline = false,
  secureTextEntry = false,
  ...rest
}: IFormInput.IView) => (
  <Div {...rest} testID={`FormInput`}>
    <S.Content
      justifyContent={multiline ? 'flex-start' : 'center'}
      height={multiline ? 118 : 48}
      pt={multiline ? 2 : 0}
      borderColor={errors?.[name]?.message ? 'error' : 'neutral_300'}
    >
      <Div justifyContent="space-between" flexDirection="row">
        {prepend}
        <Div flex={1} justifyContent="center">
          <Input
            multiline={multiline}
            placeholder={String(placeholder)}
            value={String(value)}
            onBlur={onBlur}
            color={errors?.[name]?.message ? 'error' : 'neutral_900'}
            secureTextEntry={secureTextEntry}
            mask={defineMask(name as keyof ITriggerFormInput)}
            onChangeText={(text: string) => {
              onChange(text);
              trigger(name as keyof ITriggerFormInput);
            }}
          />
        </Div>
        {append}
      </Div>
    </S.Content>
    {errors?.[name]?.message && (
      <Text variant="formError">{errors?.[name]?.message}</Text>
    )}
  </Div>
);
