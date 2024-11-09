import {SafeAreaView, ScrollView} from "react-native";
import {useRoute} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../index";
import ShowCustomer from "../../../features/Customer/ShowCustomer";

type Props = NativeStackScreenProps<RootStackParamList, 'ShowCustomer'>;

const ShowCustomerScreen = () => {
    const { params } : Props['route']= useRoute();
    const { customer } = params;
    return (
        <SafeAreaView>
            <ScrollView>
                <ShowCustomer customer={customer} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ShowCustomerScreen;
