import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Home from './screens/Home';
import CreateTodo from './screens/CreateTodo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: headerStyle.header,
          headerTitleStyle: headerStyle.headerTitle,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'DoThat!',
          }}
        />
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: '#F7444E',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});
