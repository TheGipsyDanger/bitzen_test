import * as React from 'react';
import {ICard} from '~/components/Card/Card.types';
import S from '~/components/Card/Card.styles';

export const Card = ({children}: ICard.IView) => (
  <S.Container testID={`Card`}>{children}</S.Container>
);
