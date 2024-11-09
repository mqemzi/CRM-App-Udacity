import {SafeAreaView, ScrollView} from "react-native";
import Welcome from "../../features/Welcome";
const WelcomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Welcome />
            </ScrollView>
        </SafeAreaView>
    )
}

export default WelcomeScreen;
