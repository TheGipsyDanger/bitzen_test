import {withChildren} from '~/utils';
import {IFont, IFontSizes} from '~/styles/theme';
import {TextInput} from 'react-native';

import {
  SpaceProps,
  ColorProps,
  BorderProps,
  BoxShadowProps,
  FontSizeProps,
  FontStyleProps,
  TypographyProps,
  FontFamilyProps,
  FontWeightProps,
} from 'styled-system';

export namespace IInput {
  export interface IView
    extends withChildren,
      BorderProps,
      ColorProps,
      FontSizeProps,
      FontFamilyProps,
      FontWeightProps,
      BoxShadowProps,
      FontStyleProps,
      SpaceProps,
      TypographyProps {
    testID?: string;
    font?: IFont;
    size?: IFontSizes;
    forwardRef: React.MutableRefObject<TextInput | undefined>;
    onChange: any;
    onChangeText: any;
    handleValue: any;
    handleChange: any;
    disabled: boolean;
    editable: boolean;
    onBlur: any;
    mask: string;
    type: string;
    value: string;
    placeholder: string;
    multiline?: boolean;
    secureTextEntry: boolean;
  }
  export interface IModelProps extends IView {}
  export interface IModel extends IView {}
}
