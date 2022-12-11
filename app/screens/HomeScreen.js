import {StyleSheet, View, Text } from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native'
export default function HomeScreen({mytitle,navigation}) {
    const [count,setCount]=useState(101)
  return (
    <View >
        
        <Text style={style.title}>My Mobile Store</Text>
        <Text> {mytitle}</Text>
        <Text> The counter is {count}</Text>
        <Button
              title="Go to Sumit profile"
              onPress={() =>
                   navigation.navigate('Profile', { name: 'Sumit Joshi' })
             }
    />
        
    </View>
  )
}
const style=StyleSheet.create({
   
     title:{
        fontSize:20,
        color:'black',
        fontFamily:'monospace'
     }
})