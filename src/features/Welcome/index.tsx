import {Text, View} from "react-native";
import welcomeStyles from './styles'
import {useNavigation} from "@react-navigation/native";
import {CrmButton} from "../../components/CrmButton";
import {useClearCustomer, useClearCustomerStatus} from "./hooks";
import {LoadingState} from "../../components/types";

export default function () {
    const styles=welcomeStyles;
    const { navigate } = useNavigation()
    const { onSubmit} = useClearCustomer();
    const status=useClearCustomerStatus();
    return (
        <View style={styles.container}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
            <CrmButton buttonText="Customer Regions" onPress={event => navigate('ListRegions')}  disabled={! (status==LoadingState.Pending || LoadingState.Success)}/>
            <CrmButton buttonText="Clear Storage" onPress={onSubmit} disabled={! (status==LoadingState.Pending || LoadingState.Success)} />
        </View>
    )
}
