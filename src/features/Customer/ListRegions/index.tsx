import regionStyles from './styles'
import {Text, TouchableOpacity, View} from "react-native";
import {useRegionList, useRegionListStatus} from "../hooks";
import {LoadingState} from "../../../components/types";
import {CrmButton} from "../../../components/CrmButton";
import {useNavigation} from "@react-navigation/native";


const ListRegions = () => {
    const styles = regionStyles;
    const regions=useRegionList();
    const status = useRegionListStatus();
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            { status == LoadingState.Pending && ( <View>
                <Text>Loading Regions</Text>
            </View>)}

            {
                status == LoadingState.Success && regions.map( (region: string) => (
                    <CrmButton buttonText={region} key={region} onPress={event => {navigate('ListCustomers',{region})}}/>
                ))
            }
        </View>
    )
}

export default ListRegions;
