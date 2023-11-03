import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Checkbox} from '~/components';
import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';
import {Controller} from 'react-hook-form';

export const Terms = ({control}: IRegister.ITermFormView) => (
  <Div flexDirection="row">
    <Div height={24} width={24}>
      <Controller
        control={control}
        name="agreeTerms"
        defaultValue={true}
        render={({field: {onChange, value}}) => (
          <Checkbox checked={value} onChange={() => onChange(!value)} />
        )}
      />
    </Div>
    <Div ml={3} flex={1}>
      <Text variant="infos" color="neutral_600">
        {`Li e concordo com os `}
        <Text variant="spot">{`Termos de uso`}</Text>
        {` e a\n`}
        <Text variant="spot">{`Política de privacidade`}</Text>
        {` do aplicativo Patada.`}
      </Text>
    </Div>
  </Div>
);
