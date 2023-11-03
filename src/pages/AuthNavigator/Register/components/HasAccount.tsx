import * as React from 'react';
import {Button} from '~/components';
import {Div, Text} from '~/components/Atomics';

export const HasAccount = () => (
  <Div flexDirection="row" center>
    <Text variant="label">{`Já possui conta?`}</Text>
    <Button label="Entrar" variant="link" ml={1} />
  </Div>
);
