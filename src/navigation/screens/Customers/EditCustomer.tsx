import {SafeAreaView, ScrollView} from "react-native";
import {useRoute} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../index";
import EditCustomer from "../../../features/Customer/EditCustomer";

type Props = NativeStackScreenProps<RootStackParamList, 'EditCustomer'>;

const EditCustomerScreen = () => {
    const { params } : Props['route']= useRoute();
    const { customerID } = params;
    return (
        <SafeAreaView>
            <ScrollView>
                <EditCustomer customerID={customerID} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditCustomerScreen;
