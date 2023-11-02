import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IResetPasswordConfirmation } from '~/pages/AuthNavigator/ResetPasswordConfirmation/ResetPasswordConfirmation.types'

export const ResetPasswordConfirmation = (props: IResetPasswordConfirmation.IView) => (
  <Div flex={1} center testID={`ResetPasswordConfirmation`}>
    <Text>{`ResetPasswordConfirmation`}</Text>
  </Div>
)