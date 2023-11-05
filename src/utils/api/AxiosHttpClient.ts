import {HttpRequest, HttpResponse, HttpClient} from '~/utils/api';
import {Alert} from 'react-native';

import axios, {AxiosResponse} from 'axios';

export class AxiosHttpClientDefault implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      Alert.alert('Ops!', `${error.response.data.message}`, [
        {text: 'OK', onPress: () => {}},
      ]);
      console.log(error.response);
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      ...axiosResponse.data,
    };
  }
}

export const AxiosHttpClient = new AxiosHttpClientDefault();
