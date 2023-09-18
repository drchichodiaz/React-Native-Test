import React  from 'react'
import { Text, SafeAreaView,Button } from 'react-native'

export default function SettingScreen(props) {
   const {navigation} = props;
   const gotoPage = (pageName) => {
     navigation.navigate(pageName);
   }
    return (
      <SafeAreaView>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Text> Pantalla Settings </Text>
        <Button onPress= {() => gotoPage("Home")} title="Ir a Home"/>
      </SafeAreaView>
    )
  
}
