import {TextInput, View} from "react-native";
import {useCustomerList, useCustomerListStatus, useRegionList, useRegionListStatus, useUpdateFields} from "../../hooks";
import {useNavigation} from "@react-navigation/native";
import {ButtonGroup} from "@rneui/base";
import {ActiveState} from "../../types";
import {Dropdown} from 'react-native-element-dropdown';
import {CrmButton} from "../../../../components/CrmButton";
import {LoadingState} from "../../../../components/types";
import {Input} from "@rneui/themed";
import formStyle from './styles'

interface ICustomerFormProps  {
    customerId?: number,
    status: LoadingState,
    handleSubmit: () => void
}

const CustomerForm = ({customerId, status, handleSubmit}: ICustomerFormProps) => {
    const {navigate} = useNavigation()
    const regions = useRegionList();
    const listStatus = useRegionListStatus();
    // Need to load, or adding a new customer overwrites old
    const _=useCustomerList(undefined);
    const customerListStatus = useCustomerListStatus();
    const {fields, setFormField} = useUpdateFields(customerId);
    const dropDownData = regions.map(region => ({label: region, value: region}));
    const {
        firstName,
        lastName,
        active,
        region
    } = fields;

    const onSubmit= () => {
        handleSubmit();
        navigate('ListRegions');
    }
    return (
        <View>
            <View style={formStyle.form}>
                <Input
                    key={'firstName'}
                    placeholder={'First Name'}
                    value={firstName || ''}
                    style={formStyle.input}
                    onChangeText={(text) => setFormField('firstName', text)}
                />
                <View style={formStyle.spacer}></View>
                <Input
                    key={'lastName'}
                    placeholder={'Last Name'}
                    value={lastName || ''}
                    style={formStyle.input}
                    onChangeText={(text) => setFormField('lastName', text)}
                />
                <View style={formStyle.spacer}></View>
                <ButtonGroup
                    buttons={[ActiveState.Active, ActiveState.Inactive]}
                    selectedIndex={active == ActiveState.Active ? 0 : 1}
                    containerStyle={formStyle.buttons}
                    onPress={(value) => setFormField('active', value == 0 ? ActiveState.Active : ActiveState.Inactive)}
                />
                <View style={formStyle.spacer}></View>
                <Dropdown
                    data={dropDownData}
                    placeholder='Select Region'
                    valueField={'value'}
                    value={region}
                    onChange={(item) => {
                        setFormField('region', item.value)
                    }} labelField={'label'}/>
                <CrmButton
                    buttonText={customerId==undefined ? 'New Customer' : 'Edit Customer'}
                    disabled={(status!=LoadingState.Pending && status!=LoadingState.Requesting) && customerListStatus!=LoadingState.Success && listStatus!=LoadingState.Success}
                    onPress={onSubmit} />
            </View>
        </View>
    )
}

export default CustomerForm;
