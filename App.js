
import * as React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './Navigation/TabNavigator'
import MainStackNavigator from './Navigation/StackNavigator'
const Tab = createBottomTabNavigator();


function App() {
  console.log(Tab.Navigator)
  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );

}

export default App;
