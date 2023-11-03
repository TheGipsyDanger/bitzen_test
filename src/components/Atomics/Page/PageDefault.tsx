import * as React from 'react';
import {Platform, ScrollView} from 'react-native';
import {Wrapped} from '~/components/Atomics/Wrapped';
import {IPage} from '~/components/Atomics/Page/Page.types';
import {usePage} from '~/components/Atomics/Page/Pages.model';
import S from '~/components/Atomics/Page/Page.styles';

export const PageDefault = ({
  children,
  bg = 'white',
  hasScroll = true,
  showScroll = false,
  ...props
}: IPage.IView) => {
  const {top} = usePage();
  return (
    <S.Container bg={bg}>
      <S.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={showScroll}
          scrollEnabled={hasScroll}
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps={'handled'}
        >
          <Wrapped flexGrow={1} bg={bg} {...props}>
            {children}
          </Wrapped>
          <Wrapped height={top + 84} />
        </ScrollView>
      </S.KeyboardAvoidStyled>
    </S.Container>
  );
};
