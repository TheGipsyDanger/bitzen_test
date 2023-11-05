import {AxiosHttpClient} from '~/utils/api';
import {PostPet} from '~/data/useCases';
import {IPostPet} from '~/data/dataInterfaces';

export const callCreatePet = (params: IPostPet.Params) =>
  new PostPet(AxiosHttpClient).send(params);
