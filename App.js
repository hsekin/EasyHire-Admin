import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/home';
import UserScreen from './Screens/user';
import WorkerScreen from './Screens/Worker';
import Hires from './Screens/hires';
import rating from './Screens/rating';
import review from './Screens/review';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ headerShown: false }}
          initialRouteName="HomeScreen">
        <Stack.Screen name="Home " component={HomeScreen} />
        <Stack.Screen name="Hires" component={Hires} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Worker" component={WorkerScreen} />
        <Stack.Screen name="rating" component={rating} />
        <Stack.Screen name="review" component={review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
