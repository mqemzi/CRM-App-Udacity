import {watchLoadRegions} from "./listRegions";
import { all } from 'redux-saga/effects'
import {watchCreateCustomer} from "./create";
import {watchLoadCustomers} from "./load";
import {watchEditCustomer} from "./edit";
import {watchClearCustomers} from "./clear";

export default function* customer() {
    yield all([
        watchLoadRegions(),
        watchCreateCustomer(),
        watchLoadCustomers(),
        watchEditCustomer(),
        watchClearCustomers()
    ])
}
