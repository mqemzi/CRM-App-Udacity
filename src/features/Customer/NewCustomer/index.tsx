import customerFormStyles from './styles'
import { View} from "react-native";
import CustomerForm from "../components/Form";
import {useNewCustomer, useNewCustomerStatus} from "../hooks";


const NewCustomer = () => {
    const status = useNewCustomerStatus();
    const { onSubmit } = useNewCustomer();

    return (
        <View style={customerFormStyles.container}>
            <CustomerForm status={status} handleSubmit={onSubmit}/>
        </View>
    )
}

export default NewCustomer;
