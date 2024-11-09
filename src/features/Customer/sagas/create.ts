import { delay, put, takeLatest, select } from '@redux-saga/core/effects';
import * as actions from '../reducers';
import {RootState} from "../../../store";
import {set} from "../../../utilities/storage";
import {CUSTOMER_LIST} from "../constants";
import {sendNotification} from "../hooks";

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer(): any{
    try {
        const fields = yield select((state:RootState) => state.customers.form.fields);
        const customers = yield select((state:RootState) => state.customers.list.customers);
        console.log('fields',fields);
        console.log('customers',customers);
        const customer = {
            id: customers.length+1,
            ...fields
        }
        yield delay(500);

        const result = [customer, ...customers];

        yield set(CUSTOMER_LIST,result);
        sendNotification(30,customer);
        yield put(actions.createCustomerResult(result));
    } catch( error)  {
        yield put(actions.createCustomerError(error.toString()+" "+ error.stack));
    }
}
