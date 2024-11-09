import {Button, TouchableOpacity, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import WelcomeScreen from "./screens/Welcome";
import ListRegionsScreen from "./screens/Customers/ListRegions";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import NewCustomerScreen from "./screens/Customers/NewCustomer";
import ListCustomersScreen from "./screens/Customers/ListCustomers";
import EditCustomerScreen from "./screens/Customers/EditCustomer";
import {Customer} from "../features/Customer/types";
import ShowCustomerScreen from "./screens/Customers/ShowCustomer";
export type RootStackParamList = {
    Welcome: undefined;
    ListRegions: undefined;
    NewCustomer: undefined;
    ListCustomers: { region: string },
    EditCustomer: { customerID: number},
    ShowCustomer: { customer: Customer}
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BaseNavigation = () => {
    const { navigate } = useNavigation();
    return (
        <Stack.Navigator initialRouteName="Welcome" >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="ListRegions"
                          component={ListRegionsScreen}
                          options={{
                              title: 'Customer Regions',
                              headerRight: () => (
                                  <TouchableOpacity style={styles.newButton} onPress={()=>navigate('NewCustomer')}>
                                      <Icon name="add-outline" style={styles.buttonIcon} size={50}/>
                                  </TouchableOpacity>)
                          }}/>
            <Stack.Screen name="ListCustomers" component={ListCustomersScreen} options={{
                title: 'List Customers'
            }} />
            <Stack.Screen name="NewCustomer" component={NewCustomerScreen} options={{
                title: 'New Customer'
            }} />
            <Stack.Screen name="EditCustomer" component={EditCustomerScreen} options={{
                title: 'Edit Customer'
            }} />
            <Stack.Screen name="ShowCustomer" component={ShowCustomerScreen} options={{
                title: 'Show Customer'
            }} />
        </Stack.Navigator>);
}


export default BaseNavigation;
