import {HttpClient, HttpStatusCode} from '~/utils';
import {API_URL} from '~/configs/constants';
import {IPostPet} from '~/data/dataInterfaces';
import {IPostPetRequest} from '~/data/models';
import axios from 'axios';

export class PostPet implements IPostPet {
  constructor(private readonly httpClient: HttpClient<IPostPetRequest>) {}

  async send({
    image,
    name,
    color,
    birth,
    about,
    token,
  }: IPostPet.Params): Promise<IPostPet.Response> {
    var formData = new FormData();
    formData.append('name', name);
    formData.append('color', color);
    formData.append('birthdate', birth);
    formData.append('description', about);
    formData.append(
      'image',
      'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
    );

    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/pets`,
      method: 'post',
      data: formData,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
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
