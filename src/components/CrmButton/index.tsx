import {TouchableOpacity, Text, GestureResponderEvent} from "react-native";
import buttonStyles from './styles'
interface IButtonProps  {
    buttonText: string,
    onPress: ((event: GestureResponderEvent) => void),
    disabled?: boolean
}

export const CrmButton = ({buttonText, onPress, disabled}:IButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={ disabled? buttonStyles.buttonDisabled : buttonStyles.button}
        disabled={disabled}>
            <Text style={buttonStyles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>

    )
}
