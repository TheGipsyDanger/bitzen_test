import {all, put, takeLatest} from 'redux-saga/effects';
import {callPostLogin} from '~/data/factories';
import {IPostLoginRequest} from '~/data/models';
import {loginActions} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

function* login({payload}: ReturnType<typeof loginActions.request>) {
  try {
    const resp: IPostLoginRequest = yield callPostLogin(payload);

    if (resp.status === 'Success') {
      yield put(loginActions.success(resp.data.user));
      navigate(AppRoutes.TabNavigator);
    }
  } catch (error) {
    console.log({error});
    // TRATADO NA API
  }
}

function* watchRoomRequests() {
  yield takeLatest(loginActions.request, login);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}
