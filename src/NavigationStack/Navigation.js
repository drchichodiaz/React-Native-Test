import React  from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'  
import HomeScreen from '../Screens/HomeScreen';
import SettingScreen from '../Screens/SettingScreen';


const Stack = createNativeStackNavigator();

export default function Navigation() {
 
    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Settings" component={SettingScreen}/> 
        <Stack.Screen name="Home" component={HomeScreen}/> 
        
      </Stack.Navigator>
    )
   
}
