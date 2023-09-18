import React    from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default function HomeScreen(props)  {
  const { navigation} = props;
  
  const gottoSettings = () =>{
    navigation.navigate("Settings");
  }
    return (
      <SafeAreaView>
        <Text> Estamos en Home Scree </Text>
        <Text> Estamos en Home Scree </Text>
        <Text> Estamos en Home Scree </Text>
        <Text> Estamos en Home Scree </Text>
        <Text> Estamos en Home Scree </Text>
        <Text> Estamos en Home Scree </Text>
        <Text> Estamos en Home Scree </Text>
        <Button onPress={gottoSettings} title='Ir a Ajustes'/>
      </SafeAreaView>
    )
  
}
