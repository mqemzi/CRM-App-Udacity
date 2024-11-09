import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as actions from "./reducers";
import {RootState} from "../../store";
import {LoadingState} from "../../components/types";
import {Customer} from "./types";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications'


export const sendNotification = (seconds: number, customer: Customer) => {
    const schedulingOptions = {
        content: {
            title: `Remember to go check in on ${customer.firstName} ${customer.lastName}`,
            body: 'Open the app to check for their details!',
            sound: true,
            priority: Notifications.AndroidNotificationPriority.HIGH,
            color: 'blue'
        },
        trigger: {
            seconds: seconds,
        },
    }
    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    Notifications.scheduleNotificationAsync(
        schedulingOptions,
    )
}

const handleNotification = () => {
    console.warn('Your notification ran, but won`t show up in the app!')
}

const askNotification = async () => {
    // We need to ask for Notification permissions for ios devices
    const { status } = await Notifications.requestPermissionsAsync()
    if (Device.isDevice && status === 'granted') {
        console.log('Notification permissions granted.')
    }
}


export const useRegionListStatus = () => useSelector((state:RootState) => state.customers.regions.status)

export const useRegionList=() => {
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(actions.loadRegions())
    },[dispatch]);
    return useSelector((state : RootState) => state.customers.regions.regions)
}

export const useCustomerList = (region: string|undefined) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.loadCustomers())
    },[dispatch]);
    const result=useSelector((state:RootState) => state.customers.list.customers);
    if(!region)
        return result;
    if(Array.isArray(result))
        return result.filter((customer:Customer)=>customer.region==region);
    else
        return []
}
export const useCustomerListStatus = () => useSelector((state:RootState)=> state.customers.list.status);


export const useNewCustomerStatus = () => useSelector((state: RootState)=> state.customers.create.status);

export const useNewCustomer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        askNotification();
        const listener = Notifications.addNotificationReceivedListener(handleNotification)
        return ()=> {
            listener.remove();
        }
    },[])
    return {
        onSubmit: ()=>{
            console.log('Dispatching create customer');
            dispatch(actions.createCustomer());
        }
    }
}

export const useEditCustomerStatus = () => useSelector((state:RootState)=> state.customers.edit.status);

export const useEditCustomer = (customerID: number) => {
    const dispatch = useDispatch();
    return {
        onSubmit: () => {
            console.log('Dispatching edit customer');
            dispatch(actions.editCustomer(customerID));
        }
    }
}
export const useUpdateFields = (customerId: number|undefined = undefined) => {
    const dispatch = useDispatch()
    const status = useSelector((state: RootState) => state.customers.edit.status)
    const fields = useSelector((state: RootState) => state.customers.form.fields)


    console.log("customer ID ::: ", customerId, status, customerId && status !== LoadingState.Pending)

    useEffect(() => {
        if (customerId && status === LoadingState.Pending) {
            dispatch(actions.setForm(customerId!))
        }
    }, [customerId, status]);

    return {
        fields,
        setFormField: (field: string,value: any) => {
            console.log(`Updating field ${field} to ${value}`)
            dispatch(actions.setFormValue({field,value}));
        }
    }

}
