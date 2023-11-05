import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IGetPetRequest} from '~/data/models';

export interface IGetPet {
  send(params: IGetPet.Params): Promise<IGetPet.Response>;
}

export namespace IGetPet {
  export type Params = {
    id: string;
    token: string;
  };

  export type Response = IBaseResponse & {
    data: IGetPetRequest;
  };
}
