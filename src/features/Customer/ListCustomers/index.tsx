import {View, Text} from "react-native";
import listStyle from './styles'
import {useCustomerList} from "../hooks";
import {Customer} from "../types";
import CustomerItem from "../components/CustomerItem";
import {useNavigation} from "@react-navigation/native";


interface IListCustomersProps {
    region: string
}
const ListCustomers = ({region}:IListCustomersProps) => {
    const customers = useCustomerList(region);
    const { navigate } = useNavigation();

    return (
        <View style={listStyle.container}>
            <Text>List Customers for {region} </Text>
            {customers.map((customer:Customer) => <CustomerItem customer={customer} key={customer.id}  onTitle={()=>navigate('ShowCustomer', {customer})}/>)}
        </View>
    )
}

export default ListCustomers;
