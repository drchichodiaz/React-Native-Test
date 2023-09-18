import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "../Screens/SettingScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab (){

    return (<Tab.Navigator >

            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingScreen}/>

             </Tab.Navigator>
    )

}