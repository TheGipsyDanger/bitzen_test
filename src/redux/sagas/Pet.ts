import {all, put, takeLatest} from 'redux-saga/effects';
import {callCreatePet, callGetPet} from '~/data/factories';
import {IGetPetRequest, IPostPetRequest} from '~/data/models';
import {createPetActions, getPetActions} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';
import {goBack, navigate} from '~/utils/navigator';

function* createPet({payload}: ReturnType<typeof createPetActions.request>) {
  try {
    const resp: IPostPetRequest = yield callCreatePet(payload);
    if (resp.status === 'Success') {
      yield put(createPetActions.success(String(resp?.message)));
      goBack();
    }
  } catch (error) {
    // TRATADO NA API
    console.log(JSON.stringify(error));
  }
}

function* getPet({payload}: ReturnType<typeof getPetActions.request>) {
  try {
    const resp: IGetPetRequest = yield callGetPet(payload);
    if (resp.status === 'Success') {
      yield put(getPetActions.success(resp.data));
      navigate(AppRoutes.RegisterPet);
    }
  } catch (error) {
    // TRATADO NA API
    console.log(JSON.stringify(error));
  }
}

function* watchRoomRequests() {
  yield takeLatest(createPetActions.request, createPet);
  yield takeLatest(getPetActions.request, getPet);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}
