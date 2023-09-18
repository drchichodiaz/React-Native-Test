import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "../Screens/SettingScreen";

const Drawer = createDrawerNavigator();

export default function NavigatioDrawe() {
    return (



        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Settings" component={SettingScreen}></Drawer.Screen>
        
        </Drawer.Navigator>


    )




}