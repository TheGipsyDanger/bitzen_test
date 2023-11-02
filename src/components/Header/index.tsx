import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IHeader} from '~/components/Header/Header.types';
import {useHeader} from '~/components/Header/Header.model';
import * as Icon from '~/assets/svgs';

export const Header = (props: IHeader.IView) => {
  const {top, goBack, label = ''} = useHeader(props);
  return (
    <Div bg="white" testID={`Header`}>
      <Div height={top}></Div>
      <Div
        px={4}
        height={84}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Div onPress={goBack}>
          <Icon.ArrowLeft />
        </Div>
        <Text variant="label">{label}</Text>
        <Div>
          <Icon.ArrowRight color="transparent" />
        </Div>
      </Div>
    </Div>
  );
};
