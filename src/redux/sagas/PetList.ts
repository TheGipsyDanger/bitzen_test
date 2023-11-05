import {all, put, takeLatest} from 'redux-saga/effects';
import {callGetPets} from '~/data/factories';
import {IGetPetsRequest} from '~/data/models';
import {petListActions} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

function* getList({payload}: ReturnType<typeof petListActions.request>) {
  try {
    const resp: IGetPetsRequest = yield callGetPets(payload);

    if (resp.status === 'Success') {
      yield put(
        petListActions.success([
          {
            id: 1,
            name: 'Lolinha',
            user_id: 2,
            image_url:
              'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          },
          {
            id: 2,
            name: 'Faisca',
            user_id: 2,
            image_url:
              'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          },
        ])
      );
    }
  } catch (error) {
    // TRATADO NA API
    console.log({error});
  }
}

function* watchRoomRequests() {
  yield takeLatest(petListActions.request, getList);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}
