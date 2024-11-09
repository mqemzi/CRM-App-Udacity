import editStyles from './styles'
import {Text, View} from "react-native";
import {useEditCustomer, useNewCustomer, useNewCustomerStatus} from "../hooks";
import customerFormStyles from "../NewCustomer/styles";
import CustomerForm from "../components/Form";


interface IEditCustomerProps {
    customerID: number
}
const EditCustomer = ({customerID} : IEditCustomerProps) => {
    const status = useNewCustomerStatus();
    const { onSubmit } = useEditCustomer(customerID);

    return (
        <View style={customerFormStyles.container}>
            <CustomerForm status={status} handleSubmit={onSubmit} customerId={customerID}/>
        </View>
    )
}

export default EditCustomer;
