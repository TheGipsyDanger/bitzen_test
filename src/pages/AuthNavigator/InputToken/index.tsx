import * as React from 'react';
import {Div, Spacing, Text} from '~/components/Atomics';
import {Header, Distribution, Button} from '~/components';
import {IInputToken} from '~/pages/AuthNavigator/InputToken/InputToken.types';
import {useInputToken} from '~/pages/AuthNavigator/InputToken/InputToken.model';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import S from '~/pages/AuthNavigator/InputToken/InputToken.styles';

export const InputToken = (props: IInputToken.IView) => {
  const {
    ref,
    value,
    setValue,
    inputProps,
    getCellOnLayoutHandler,
    onSubmit,
    resendCode,
  } = useInputToken(props);

  return (
    <Div flex={1} bg="white" testID={`InputToken`}>
      <Header.Default />
      <Distribution justifyContent="center">
        <Spacing space={6}>
          <Spacing space={4}>
            <Text
              variant="title"
              textAlign="center"
            >{`Confira o seu email`}</Text>
            <Text
              variant="infos"
              color="neutral_500"
              textAlign="center"
            >{`Insira nos campos abaixo o código\nque enviamos para você no seu\nendereço de e-mail.`}</Text>
          </Spacing>
          <Spacing space={6}>
            <CodeField
              ref={ref}
              {...inputProps}
              value={value}
              onChangeText={setValue}
              cellCount={4}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[S.Cell, isFocused && S.FocusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <Spacing space={4}>
              <Button label="Próximo" variant="primary" onPress={onSubmit} />
              <Div flexDirection="row" center>
                <Text
                  variant="infos"
                  color="neutral_600"
                >{`Não recebeu o código?`}</Text>
                <Button
                  onPress={resendCode}
                  label="Reenviar"
                  variant="link"
                  ml={1}
                />
              </Div>
            </Spacing>
          </Spacing>
        </Spacing>
      </Distribution>
    </Div>
  );
};
