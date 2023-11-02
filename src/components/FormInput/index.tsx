import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Input} from '~/components/Atomics/Input';
import {IFormInput} from '~/components/FormInput/FormInput.types';
import S from '~/components/FormInput/FormInput.styles';

export const FormInput = ({
  placeholder,
  onChange,
  value,
  onBlur,
  trigger,
  name,
  errors,
  secureTextEntry,
  ...rest
}: IFormInput.IView) => (
  <Div {...rest} testID={`FormInput`}>
    <S.Content borderColor={errors?.[name]?.message ? 'red' : 'transparent'}>
      <Input
        type="form"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        // mask={}
        onChangeText={(text: string) => {
          onChange(text);
          // trigger(name as keyof ITriggerFormInput);
        }}
      />
    </S.Content>
  </Div>
);
