import { delay, put, takeLatest, select } from '@redux-saga/core/effects';
import * as actions from '../reducers';
import {RootState} from "../../../store";
import {set} from "../../../utilities/storage";
import {CUSTOMER_LIST} from "../constants";
import {PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../types";

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action: PayloadAction<number>): any{
    try {
        const fields = yield select((state:RootState) => state.customers.form.fields);
        const customers = yield select((state:RootState) => state.customers.list.customers);

        const customer = {
            id: action.payload,
            ...fields
        }
        yield delay(500);
        console.log(customer);
        const result = customers.map((cur:Customer) => {
            if(cur.id==action.payload)
                return customer;
            return cur;
        })
        //const result = [customer, ...customers];

        yield set(CUSTOMER_LIST,result);

        yield put(actions.createCustomerResult(result));
    } catch( error)  {
        yield put(actions.createCustomerError(error.toString()));
    }
}
