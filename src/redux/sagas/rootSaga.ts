import {all} from 'redux-saga/effects';

import userSaga from './User';
import petListSaga from './PetList';
import petSaga from './Pet';

export default function* rootSaga(): Generator {
  yield all([userSaga(), petListSaga(), petSaga()]);
}
