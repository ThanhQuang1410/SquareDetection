import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Scanner from '../Screen/Scanner';
import ViewResult from '../Screen/ViewResult';
const Stack = createStackNavigator();
export default function ApplicationStack() {
  return (
    <Stack.Navigator initialRouteName="Scanner" keyboardHidesTabBar={true}>
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ViewResult" component={ViewResult} />
    </Stack.Navigator>
  );
}
