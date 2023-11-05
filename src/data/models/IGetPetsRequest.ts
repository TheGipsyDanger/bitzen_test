import {IBaseResponse, IPetListItemData} from '~/utils';

export interface IGetPetsRequest extends IBaseResponse {
  data: IPetListItemData;
}
