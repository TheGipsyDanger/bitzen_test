import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IPostPetRequest} from '~/data/models';

export interface IPostPet {
  send(params: IPostPet.Params): Promise<IPostPet.Response>;
}

export namespace IPostPet {
  export type Params = {
    image: string;
    name: string;
    color: string;
    birth: string;
    about: string;
    token: string;
  };

  export type Response = IBaseResponse & {
    data: IPostPetRequest;
  };
}
