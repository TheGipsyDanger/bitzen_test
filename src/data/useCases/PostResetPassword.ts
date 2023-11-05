import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IPostResetPassword} from '~/data/dataInterfaces';
import {IPostResetPasswordRequest} from '~/data/models';

export class PostResetPassword implements IPostResetPassword {
  constructor(
    private readonly httpClient: HttpClient<IPostResetPasswordRequest>
  ) {}

  async send({
    token,
    email,
    passwod,
    password_confirmation,
  }: IPostResetPassword.Params): Promise<IPostResetPassword.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/reset-password`,
      method: 'post',
      body: {
        token,
        email,
        passwod,
        password_confirmation,
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
