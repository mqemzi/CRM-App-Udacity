import {Text, TouchableOpacity, View} from "react-native";
import {Customer} from "../../types";
import {Card} from "@rneui/themed";
import {CrmButton} from "../../../../components/CrmButton";

interface ICustomerListItemProp {
    customer: Customer,
    onEdit?: (customerId: number)=>void,
    onTitle?:(customer: Customer) => void
}
const CustomerItem = ({ customer, onEdit, onTitle }:ICustomerListItemProp) => {
    return (<Card>
        { onTitle ? (
            <TouchableOpacity onPress={()=>{onTitle(customer)}}>
                <Card.Title>
                    {customer.firstName} {customer.lastName}
                </Card.Title>
            </TouchableOpacity>
        )  : (
        <Card.Title>
            {customer.firstName} {customer.lastName}
        </Card.Title> )}
        <Card.Divider/>
        <View>
            <Text>ID: {customer.id}</Text>
            <Text>Active: {customer.active}</Text>
            <Text>Region: {customer.region}</Text>
            { onEdit && (<CrmButton buttonText="Edit" onPress={()=> {onEdit(customer.id)}} /> )}
        </View>
    </Card> )
}


export default CustomerItem;
