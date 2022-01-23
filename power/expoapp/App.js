import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/screens/login';
import Home from './src/screens/home';
import Appliances from './src/screens/appliances';
import Chart from './src/screens/chart';
import Stock from './src/screens/stock';



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
        name="Home" 
        component={Home}
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Appliances" 
        component={Appliances}
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Chart" 
        component={Chart}
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Stock" 
        component={Stock}
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
