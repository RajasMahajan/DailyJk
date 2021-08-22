import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createAppContainer} from 'react-navigation';
import Tellone from './Screens/tell';
import Dailyjk from './Screens/Dailyjk';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
   <View>
     <Appcontainer/>
        </View>
  )
}
const Appcontainer = createAppContainer(
  TabNavigator
)
const TabNavigator = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Dailyjkone" component={Dailyjk}/>
      <Tab.Screen name="tellone" component={Tellone}/>

    </Tab.Navigator>
  )
}