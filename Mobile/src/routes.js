import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import App from './pages/Main/App';
import Info from './pages/Info/';
import InfoOffline from './pages/infoOffline'
import FichaSalva from './pages/fichaSalva';
import FichaOnline from './pages/fichaOnline';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Login from './pages/login'

import Teste from './pages/teste'

//const screens = {
//  App: {
//    screen: App,
//  },
//};

const AppStack = createStackNavigator();

function Route() {
  return(
    <NavigationContainer>
      <AppStack.Navigator initialRouteName = 'App' screenOptions= {{headerShown: false}}>
          <AppStack.Screen name = "App" component = {App}></AppStack.Screen>
          <AppStack.Screen name = "Info" component = {Info}></AppStack.Screen>
          <AppStack.Screen name = "FichaSalva" component = {FichaSalva}></AppStack.Screen>
          <AppStack.Screen name = "FichaOnline" component = {FichaOnline}></AppStack.Screen>


          <AppStack.Screen name = "InfoOffline" component = {InfoOffline}></AppStack.Screen>

          <AppStack.Screen name = 'Login' component = {Login}></AppStack.Screen>
          <AppStack.Screen name = 'teste' component = {Teste}></AppStack.Screen>



      </AppStack.Navigator>

    </NavigationContainer>
  )
}
 function Routes() {
  return(
    <NavigationContainer>
      <AppStack.Navigator initialRouteName = 'Login' screenOptions= {{headerShown: false}}>
          <AppStack.Screen name = "App" component = {App}></AppStack.Screen>
          <AppStack.Screen name = "Info" component = {Info}></AppStack.Screen>
          <AppStack.Screen name = "FichaSalva" component = {FichaSalva}></AppStack.Screen>
          <AppStack.Screen name = "FichaOnline" component = {FichaOnline}></AppStack.Screen>
          <AppStack.Screen name = "InfoOffline" component = {InfoOffline}></AppStack.Screen>



          <AppStack.Screen name = 'Login' component = {Login}></AppStack.Screen>
          <AppStack.Screen name = 'teste' component = {Teste}></AppStack.Screen>



      </AppStack.Navigator>

    </NavigationContainer>
  )
}

export {
  Routes,
  Route
}

/** 
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App,
      Info,
      FichaSalva,
      FichaOnline,
    },
    {initialRouteName: 'App'},
  ),
);

export default Routes;
*/