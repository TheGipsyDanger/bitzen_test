import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IPostResendPasswordCode} from '~/data/dataInterfaces';
import {IPostResendPasswordCodeRequest} from '~/data/models';

export class PostResendPasswordCode implements IPostResendPasswordCode {
  constructor(
    private readonly httpClient: HttpClient<IPostResendPasswordCodeRequest>
  ) {}

  async send({
    email,
  }: IPostResendPasswordCode.Params): Promise<IPostResendPasswordCode.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/forgot-password`,
      method: 'post',
      body: {
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
