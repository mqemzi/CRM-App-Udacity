import {SafeAreaView, ScrollView} from "react-native";
import ListCustomers from "../../../features/Customer/ListCustomers";
import {useRoute} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../index";

type Props = NativeStackScreenProps<RootStackParamList, 'ListCustomers'>;

const ListCustomersScreen = () => {
    const { params } : Props['route']= useRoute();
    const { region } = params;
    return (
        <SafeAreaView>
            <ScrollView>
                <ListCustomers region={region}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListCustomersScreen;
