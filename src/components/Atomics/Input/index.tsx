import * as React from 'react';
import S from '~/components/Atomics/Input/Input.styles';
import {useInput} from '~/components/Atomics/Input/Input.model';
import {IInput} from '~/components/Atomics/Input/Input.types';

export const Input = (props: IInput.IView) => {
  const {
    type,
    disabled,
    onChange,
    autoFocus,
    forwardRef,
    handleValue,
    handleChange,
    color = 'black',
    font = 'regular',
    size = 'small',
    editable = true,
    placeholder = '',
    secureTextEntry = false,
    onBlur,
  } = useInput(props);
  return (
    <S.Input
      {...props}
      ref={forwardRef}
      placeholderTextColor="#585858"
      font={font}
      onBlur={onBlur}
      placeholder={placeholder}
      autoFocus={autoFocus}
      color={color}
      size={size}
      value={handleValue}
      editable={!disabled}
      onChangeText={handleChange}
      returnKeyType={'next'}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      keyboardType={type === 'number' ? 'numeric' : undefined}
      secureTextEntry={secureTextEntry}
      opacity={disabled ? 0.5 : 1}
    />
  );
};
