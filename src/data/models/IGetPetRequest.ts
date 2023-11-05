import {IBaseResponse, IPet} from '~/utils';

export interface IGetPetRequest extends IBaseResponse {
  data: IPet;
}
