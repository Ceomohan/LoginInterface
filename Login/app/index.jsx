import { Text, View, StyleSheet } from "react-native"
import RegisterScreen from "../screens/RegisterScreen"
import LoginScreen from "../screens/LoginScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import DashboardScreen from "../screens/DashboardScreen"

const Stack = createNativeStackNavigator()


export default function App() {
    return (
      <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Register' component={RegisterScreen} />
              <Stack.Screen name='Dashboard' component={DashboardScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "center"
    }
})