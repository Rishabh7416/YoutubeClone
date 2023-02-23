import React from 'react';
import Screen from '../screens/screen';
import ParentScreen from '../screens/main/parentScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function NewRouter() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'parentScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'parentScreen'} component={ParentScreen} />
        <Stack.Screen name={'screen'} component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
