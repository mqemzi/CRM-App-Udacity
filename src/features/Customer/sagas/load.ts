import { delay, put, takeLatest } from '@redux-saga/core/effects';
import * as actions from '../reducers';
import {get} from "../../../utilities/storage";
import {CUSTOMER_LIST} from "../constants";

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers():any {
    try {
        const customers = yield get(CUSTOMER_LIST);
        // Fake getting region list to use from an API.
        yield delay(1500);
        if(customers)
            yield put(actions.loadCustomersResult(customers));
    } catch( error)  {

    }
}
