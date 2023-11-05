import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IPostValidateToken} from '~/data/dataInterfaces';
import {IPostValidateTokenRequest} from '~/data/models';

export class PostValidateToken implements IPostValidateToken {
  constructor(
    private readonly httpClient: HttpClient<IPostValidateTokenRequest>
  ) {}

  async send({
    token,
    email,
  }: IPostValidateToken.Params): Promise<IPostValidateToken.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/reset-password/token/validate`,
      method: 'post',
      body: {
        token,
        email,
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
