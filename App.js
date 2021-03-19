/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationStack from './App/Navigation/appNavigation';
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <ApplicationStack />
    </NavigationContainer>
  );
};

export default App;
