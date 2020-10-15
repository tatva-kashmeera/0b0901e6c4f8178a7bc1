import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '../components/Home';
import DetailScreen from '../components/DetailsScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
    // screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}
