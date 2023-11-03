import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IHeader} from '~/components/Header/Header.types';
import {useHeader} from '~/components/Header/Header.model';
import S from '~/components/Header/Header.styles';
import * as Icon from '~/assets/svgs';

export const Internal = (props: IHeader.IView) => {
  const {top, goToAddPets} = useHeader(props);
  return (
    <S.InternalContainer testID={`Header`}>
      <Div height={top} />
      <Div
        px={4}
        height={84}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="neutral_100"
      >
        <Div>
          <Text variant="title">{`Seus pets`}</Text>
        </Div>
        <Div onPress={goToAddPets}>
          <Div flexDirection="row" center>
            <Icon.PlusCircle />
            <Text ml={2} variant="labelSemiBold" color="blue_black">
              {`Novo pet`}
            </Text>
          </Div>
        </Div>
      </Div>
    </S.InternalContainer>
  );
};
