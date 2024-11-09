import {ActiveState, Customer} from './types'
import {LoadingState} from "../../components/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const name = 'customer'


export interface CustomerState {
    regions: {
        regions: Array<string>,
        status: LoadingState,
    }
    list: {
        customers: Array<Customer>,
        status: LoadingState,
    },
    create: {
        status: LoadingState,
    },
    edit: {
        status: LoadingState,
    },
    clear: {
      status: LoadingState,
    },
    error: {
        message: string|null|undefined;
    },
    form: {
        fields: {
            firstName: string,
            lastName: string,
            region: string,
            active: ActiveState
        }
    }
}

const initialState: CustomerState = {
    form: {
            fields:
                {
                    active: ActiveState.Inactive,
                    firstName: "",
                    lastName: "",
                    region: ""
                }
            },
    error: {
        message: undefined
    },
    regions: {
        regions: [],
        status: LoadingState.Pending,
    },
    list: {
        customers: [],
        status: LoadingState.Pending
    },
    create: {
        status: LoadingState.Pending
    },
    edit: {
        status: LoadingState.Pending
    },
    clear: {
        status:LoadingState.Pending
    }
}



const slice = createSlice({
    name,
    initialState,
    reducers: {
        createCustomer: (state) => {
            state.create.status = LoadingState.Requesting
        },
        createCustomerResult: (state, {payload}: PayloadAction<Array<Customer>>) => {
          state.create.status=LoadingState.Success;
          state.list.customers=payload;
          state.form.fields=initialState.form.fields;
          // TODO: IS this needed? do testing before uncommenting
          state.create = initialState.create;
        },
        createCustomerError: (state, {payload}:PayloadAction<string>) => {
          state.create.status=LoadingState.Error;
          state.error.message=payload;
          state.form.fields=initialState.form.fields;
        },
        editCustomer: (state, { payload}: PayloadAction<number>) => {
          state.edit.status=LoadingState.Pending;
        },
        editCustomerResult: (state, {payload}: PayloadAction<Array<Customer>>) => {
          state.edit.status = LoadingState.Success;
          state.list.customers = payload;
          state.form.fields = initialState.form.fields;
          state.edit = initialState.edit;
        },
        editCustomerError: (state, {payload}: PayloadAction<string>) => {
          state.edit.status=LoadingState.Error;
          state.error.message=payload;
          state.form.fields = initialState.form.fields;
        },
        loadCustomers: (state) => {
            state.list.status=LoadingState.Requesting;
        },
        loadCustomersResult: (state,{payload}:PayloadAction<Array<Customer>>) => {
          state.list.customers=payload;
        },
        loadCustomersError: (state, {payload}:PayloadAction<string>) => {
          state.list.status=LoadingState.Error;
          state.error.message=payload;
        },
        clearCustomers:(state) => {
          state.list.status=LoadingState.Requesting
        },
        clearCustomersResult: (state, { payload }:PayloadAction<Array<Customer>>) => {
            state.clear.status=LoadingState.Success;
            state.list.customers=payload;
        },
        clearCustomersError: (state, {payload}:PayloadAction<string>) => {
          state.clear.status = LoadingState.Error
        },
        loadRegions: (state) => {
            state.regions.status=LoadingState.Requesting;
        },
        setRegions: (state, {payload}) => {
            state.regions.regions=payload;
            state.regions.status=LoadingState.Success
        },
        setForm: (state, {payload}: PayloadAction<number>) => {
            const customer = state.list.customers.find(c => c.id == payload)
            if ( customer) {
                state.form.fields=customer;
            } else {
                state.error.message = `Could not find customer with ID: ${payload}`
            }
        },
        setFormValue:(state, { payload } : PayloadAction<{field:string,value:any}>) => {
            const current = state.form.fields;
            const { field,value} = payload
            const fields = {
                ...current,
                [field]:value
            }

            state.form.fields = fields;
        }
    }
});

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    loadRegions,
    setRegions,
    setForm,
    setFormValue,
    loadCustomers,
    loadCustomersResult,
    loadCustomersError,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    clearCustomers,
    clearCustomersError,
    clearCustomersResult
} = slice.actions;

export default slice.reducer;
