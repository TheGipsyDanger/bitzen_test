import {ListRenderItemInfo} from 'react-native';
import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  ISearchForm,
  IPetListItem,
} from '~/utils/interfaces';
export namespace IHome {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    pets: IPetListItem[];
    keyExtractor: (item: IPetListItem) => string;
    renderItem: ({item}: ListRenderItemInfo<IPetListItem>) => React.JSX.Element;
    control: IControl<ISearchForm<string>>;
    trigger: ITrigger<ISearchForm<string>>;
    handleSubmit: IHandlerSubmit<ISearchForm<string>>;
    errors: IFormErros<ISearchForm<string>>;
    onSubmit: (data: ISearchForm<string>) => void;
    isValid: boolean;
    isLoading: boolean;
  }
}
