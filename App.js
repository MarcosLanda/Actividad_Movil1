import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoScreen from "./src/screens/InfoScreen";
import FlatlistScreen from "./src/screens/FlatlistScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Info">
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ title: "Pantalla 1", headerShown: false }}
        />
        <Stack.Screen
          name="Lista"
          component={FlatlistScreen}
          options={{ title: "Pantalla 2", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}