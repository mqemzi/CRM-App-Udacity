import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation'
import {store} from "./src/store";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";



export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
