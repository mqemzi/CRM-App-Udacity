import AsyncStorage from '@react-native-async-storage/async-storage'

export const set = async (key: string, value: any) => {
    const serialized = JSON.stringify(value);
    return await AsyncStorage.setItem(key,serialized);
}


export const get = async ( key:string ) => {
    const raw  = await AsyncStorage.getItem(key);
    if(raw) {
        return JSON.parse(raw);
    }
    else
        return undefined;
}

export const remove = async (key:string) => {
    return await AsyncStorage.removeItem(key);
}

export const clear = async () => {
    return await AsyncStorage.clear();
}
