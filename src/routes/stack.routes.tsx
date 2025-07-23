import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen/MainScreen";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

const {Screen, Navigator} = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="main"
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}