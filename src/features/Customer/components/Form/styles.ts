import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        minWidth:300
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 15
    },
    spacer: {
        height: 15,
        width: '100%'
    },
    buttons: {
        marginBottom: 20,
        width: '100%'
    }
});


export default styles;
