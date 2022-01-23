import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';
import Menu from './src/screens/menu';
import Stats from './src/screens/stats';
import Market from './src/screens/market';
import Share from './src/screens/share';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Menu" 
        component={Menu} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Stats" 
        component={Stats} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Market" 
        component={Market} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Share" 
        component={Share} 
        options={{ headerShown: false}} 
      />
    
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('app', () => App);
