import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IPostLogin} from '~/data/dataInterfaces';
import {IPostLoginRequest} from '~/data/models';

export class PostLogin implements IPostLogin {
  constructor(private readonly httpClient: HttpClient<IPostLoginRequest>) {}
  async send({
    email,
    password,
  }: IPostLogin.Params): Promise<IPostLogin.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/login`,
      method: 'post',
      body: {
        email,
        password,
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return {
          status: 'Success',
          message: httpResponse.message,
          data: httpResponse?.data,
        };
      default:
        throw Error();
    }
  }
}
