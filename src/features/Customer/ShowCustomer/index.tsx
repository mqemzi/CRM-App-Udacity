import showStyles from './styles'
import {Text, View} from "react-native";
import {Customer} from "../types";
import CustomerItem from "../components/CustomerItem";
import {useNavigation} from "@react-navigation/native";
interface IShowCustomerProps {
    customer: Customer
}

const ShowCustomer = ({ customer } :IShowCustomerProps) => {
    const { navigate } = useNavigation();
    const handleEdit = (customerID: number) => {
        navigate('EditCustomer',{customerID});
    }
    return (
        <View>
            <CustomerItem customer={customer} onEdit={handleEdit}/>
        </View>
    )
}

export default ShowCustomer;
