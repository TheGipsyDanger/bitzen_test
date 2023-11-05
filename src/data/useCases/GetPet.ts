import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IGetPet} from '~/data/dataInterfaces';
import {IGetPetRequest} from '~/data/models';

export class GetPet implements IGetPet {
  constructor(private readonly httpClient: HttpClient<IGetPetRequest>) {}

  async send({id, token}: IGetPet.Params): Promise<IGetPet.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/pets/${id}`,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return {
          status: 'Success',
          message: '',
          data: httpResponse?.data,
        };
      default:
        throw Error();
    }
  }
}
