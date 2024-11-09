import {SafeAreaView, ScrollView} from "react-native";
import NewCustomer from "../../../features/Customer/NewCustomer";

const NewCustomerScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <NewCustomer/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewCustomerScreen;
