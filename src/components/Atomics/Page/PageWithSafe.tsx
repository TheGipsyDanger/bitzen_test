import * as React from 'react';
import {Platform, ScrollView} from 'react-native';
import {Wrapped} from '~/components/Atomics/Wrapped';
import {IPage} from '~/components/Atomics/Page/Page.types';
import S from '~/components/Atomics/Page/Page.styles';

export const PageWithSafe = ({
  children,
  bg = 'white',
  hasScroll = true,
  ...props
}: IPage.IView) => (
  <S.SafeAreaStyled bg={bg}>
    <S.KeyboardAvoidStyled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        scrollEnabled={hasScroll}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps={'handled'}
      >
        <Wrapped flexGrow={1} bg={bg} {...props}>
          {children}
        </Wrapped>
      </ScrollView>
    </S.KeyboardAvoidStyled>
  </S.SafeAreaStyled>
);
