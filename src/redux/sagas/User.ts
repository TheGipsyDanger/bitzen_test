import {all, put, takeLatest} from 'redux-saga/effects';
import {
  callPostLogin,
  callResendPasswordCode,
  callValidateToken,
  callResetPassword,
} from '~/data/factories';
import {
  IPostLoginRequest,
  IPostResendPasswordCodeRequest,
  IPostResetPasswordRequest,
} from '~/data/models';
import {
  setToken,
  loginActions,
  resendCodeActions,
  validateCodeActions,
  resetPasswordActions,
} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

function* login({payload}: ReturnType<typeof loginActions.request>) {
  try {
    const resp: IPostLoginRequest = yield callPostLogin(payload);

    if (resp.status === 'Success') {
      yield put(loginActions.success(resp.data.user));
      yield put(setToken(resp.data.token));
      navigate(AppRoutes.TabNavigator);
    }
  } catch (error) {
    // TRATADO NA API
    console.log({error});
  }
}

function* resendCode({payload}: ReturnType<typeof resendCodeActions.request>) {
  try {
    const resp: IPostResendPasswordCodeRequest = yield callResendPasswordCode(
      payload
    );

    if (resp.status === 'Success') {
      yield put(resendCodeActions.success({}));
      navigate(AppRoutes.InputToken, {params: {email: payload.email}});
    }
  } catch (error) {
    yield put(resendCodeActions.failure(''));
    console.log({error});
  }
}

function* validateCode({
  payload,
}: ReturnType<typeof validateCodeActions.request>) {
  try {
    const resp: IPostResendPasswordCodeRequest = yield callValidateToken(
      payload
    );

    if (resp.status === 'Success') {
      yield put(validateCodeActions.success({}));
      navigate(AppRoutes.InputPassword, {
        params: {email: payload.email, token: payload.token},
      });
    }
  } catch (error) {
    yield put(validateCodeActions.failure(''));
    console.log({error});
  }
}

function* resetPassword({
  payload,
}: ReturnType<typeof resetPasswordActions.request>) {
  try {
    const resp: IPostResetPasswordRequest = yield callResetPassword(payload);

    if (resp.status === 'Success') {
      yield put(resetPasswordActions.success({}));
      navigate(AppRoutes.ResetPasswordConfirmation);
    }
  } catch (error) {
    yield put(resetPasswordActions.failure(''));
    console.log({error});
  }
}

function* watchRoomRequests() {
  yield takeLatest(loginActions.request, login);
  yield takeLatest(resendCodeActions.request, resendCode);
  yield takeLatest(validateCodeActions.request, validateCode);
  yield takeLatest(resetPasswordActions.request, resetPassword);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}
