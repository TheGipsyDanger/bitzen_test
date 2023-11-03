import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IHeader} from '~/components/Header/Header.types';
import {useHeader} from '~/components/Header/Header.model';
import S from '~/components/Header/Header.styles';
import * as Icon from '~/assets/svgs';

export const Default = (props: IHeader.IView) => {
  const {top, goBack, label = ''} = useHeader(props);
  return (
    <S.Container testID={`Header`}>
      <Div height={top} />
      <Div
        backgroundColor={'white'}
        px={4}
        height={84}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Div onPress={goBack}>
          <Icon.ArrowLeft />
        </Div>
        <Div>
          <Text variant="label">{label}</Text>
        </Div>
        <Div>
          <Icon.ArrowRight color="transparent" />
        </Div>
      </Div>
    </S.Container>
  );
};
