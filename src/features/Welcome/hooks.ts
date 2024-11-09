import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useEffect} from "react";
import * as actions from "../Customer/reducers";
import {LoadingState} from "../../components/types";

export const useClearCustomerStatus: ()=>LoadingState = () => useSelector((state:RootState) => state.customers.clear.status)

export const useClearCustomer = () => {
    const dispatch=useDispatch();
    return {
        onSubmit: () => {
            dispatch(actions.clearCustomers());
        }
    }
}
