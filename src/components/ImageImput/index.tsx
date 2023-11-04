import * as React from 'react';
import {Spacing, Text} from '~/components/Atomics';
import {useDefineContentHeight} from '~/utils/hooks';
import {theme} from '~/styles';
import {IImageImput} from '~/components/ImageImput/ImageImput.types';
import S from '~/components/ImageImput/ImageImput.styles';
import * as Icons from '~/assets/svgs';

export const ImageImput = (props: IImageImput.IView) => {
  const {withPercentage} = useDefineContentHeight();

  return (
    <S.Container center height={withPercentage(31)} testID={`ImageImput`}>
      <Spacing space={3}>
        <Icons.Camera width="48" height="48" color={theme.colors.neutral_700} />
        <Text
          variant="label"
          textAlign="center"
          color="neutral_700"
        >{`Clique paraadicionar\numa imagem`}</Text>
      </Spacing>
    </S.Container>
  );
};
