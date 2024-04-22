import { all, fork } from 'redux-saga/effects';
import baseSalarySaga from './hr/salary/BaseSalarySaga';
import positionSaga from 'store/redux-saga/saga/base/positionSaga';
import positionSaga2 from 'store/saga/hr/base/position';
import hobongSaga from 'store/redux-saga/saga/base/hobongSaga';
import HolidaySaga from './hr/base/holiday';
import attdSaga from 'store/redux-saga/saga/attendance/attendanceSaga';
import dailyAttendSaga from 'store/redux-saga/saga/attendance/DailyAttendSaga';
import commonSaga from 'store/redux-saga/saga/common/commonSaga';
import baseSaga from 'store/redux-saga/saga/base/baseSaga';
import empManagementRootSaga from '../../pages/hr/empManagement/saga/index';
import salSaga from 'store/redux-saga/saga/salary/salarySaga';
<<<<<<< HEAD
// import { empCardSaga } from 'pages/hr/empManagement/saga/empcardSaga';
import { empCardSaga } from 'pages/hr/empManagement/saga/empCardSaga';
=======
import certificateIssuanceSaga from 'store/redux-saga/saga/base/certificateIssuanceSaga';

>>>>>>> da321188eb75d1ec6b8fe452dcd8f4085659efd3

function* rootSaga() {
  yield all([
    fork(baseSalarySaga),
    fork(positionSaga),
    fork(positionSaga2),
    fork(hobongSaga),
    fork(HolidaySaga), // 다른 Saga들도 추가
    fork(empManagementRootSaga),
    fork(attdSaga),
    fork(dailyAttendSaga),
    fork(commonSaga),
    fork(baseSaga),
    fork(salSaga),
<<<<<<< HEAD
    fork(empCardSaga)
=======
    fork(certificateIssuanceSaga)
>>>>>>> da321188eb75d1ec6b8fe452dcd8f4085659efd3
  ]);
}

export default rootSaga;
