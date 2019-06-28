import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './src/components/AuthLoadingScreen'
import masuk from './src/components/masuk'
import daftar from './src/components/daftar'
import HomeScreen from './src/components/Dashboard/Homescreen'
import ProfileScreen from './src/components/Dashboard/ProfileScreen'


const BerandaStack = createStackNavigator({ Home: HomeScreen, Profile: ProfileScreen });
const AuthStack = createStackNavigator({ SignIn: masuk, Register: daftar });

const App = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Beranda: BerandaStack

  },
  {
    initialRouteName: 'AuthLoading',
  }
));


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
})

export default App
