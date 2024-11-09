import { delay, put, takeLatest } from '@redux-saga/core/effects';
import * as actions from '../reducers';
import {get, set} from "../../../utilities/storage";
import {CUSTOMER_LIST} from "../constants";
import {Customer} from "../types";

export function* watchClearCustomers() {
    yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers);
}

export function* takeClearCustomers():any {
    try {
        const result:Array<Customer>=[];
        // Fake getting region list to use from an API.
        yield delay(1500);
        yield set(CUSTOMER_LIST,[]);
        yield put(actions.clearCustomersResult(result))
    } catch( error)  {

    }
}
