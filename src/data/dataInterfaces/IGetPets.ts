import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IGetPetsRequest} from '~/data/models';

export interface IGetPets {
  send(params: IGetPets.Params): Promise<IGetPets.Response>;
}

export namespace IGetPets {
  export type Params = {
    token: string;
  };

  export type Response = IBaseResponse & {
    data: IGetPetsRequest;
  };
}
