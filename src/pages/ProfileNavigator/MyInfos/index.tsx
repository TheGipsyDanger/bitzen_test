import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IMyInfos } from '~/pages/ProfileNavigator/MyInfos/MyInfos.types'

export const MyInfos = (props: IMyInfos.IView) => (
  <Div flex={1} center testID={`MyInfos`}>
    <Text>{`MyInfos`}</Text>
  </Div>
)