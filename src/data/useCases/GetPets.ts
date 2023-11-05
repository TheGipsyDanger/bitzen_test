import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IGetPets} from '~/data/dataInterfaces';
import {IGetPetsRequest} from '~/data/models';

export class GetPets implements IGetPets {
  constructor(private readonly httpClient: HttpClient<IGetPetsRequest>) {}

  async send({token}: IGetPets.Params): Promise<IGetPets.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/pets?search=aaa`,
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
