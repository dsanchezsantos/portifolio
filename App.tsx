import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/stack.routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
