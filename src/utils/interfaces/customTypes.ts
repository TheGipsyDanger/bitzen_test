import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  BorderColorProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
  ResponsiveValue,
} from 'styled-system';
import {IFont, IFontSizes, IColors, IRadius} from '~/styles/theme';

export type withChildren<T = {}> = T & {children?: React.ReactNode};
export type StringToNumberMapcd = {[key: string]: number};
export type IModalType = {[key: string]: JSX.Element};
export type IInsets = {top: number; bottom: number};
export type IStringMap = {[key: string]: string};
export type StringToNumberMap = {[key: string]: number};

export interface IWrappedSystem
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    LayoutProps,
    withChildren {
  radius?: keyof IRadius;
  testID?: string;
  center?: boolean;
  onPress?(): void;
  bg?: ResponsiveValue<keyof IColors>;
  backgroundColor?: ResponsiveValue<keyof IColors>;
  activeOpacity?: number;
}

export type ITextVariants =
  | 'title'
  | 'titleBold'
  | 'label'
  | 'labelSemiBold'
  | 'infos'
  | 'formError'
  | 'spot'
  | 'name';
export interface ITextSystem
  extends BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps,
    withChildren {
  textTransform?: string;
  textDecoration?: string;
  font?: keyof IFont;
  size?: keyof IFontSizes;
  variant?: ITextVariants;
  color?: ResponsiveValue<keyof IColors>;
  testID?: string;
  numberOfLines?: number;
}

export interface IBaseResponse {
  message?: string;
  status: 'Success' | 'Error';
}

export interface ISvgIcons {
  width?: string;
  height?: string;
  color?: string;
}
