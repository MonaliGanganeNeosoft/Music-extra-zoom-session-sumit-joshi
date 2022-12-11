import { View, Text,Button } from 'react-native'
import React from 'react'

export default function ProfileScreen({navigation,route}) {
  return (
    <View>
      <Text>This is  profile</Text>
      <Button
              title={` Details`}
              onPress={() =>
                   navigation.navigate('Details', { title: 'Full Stack Consultant' })
             }
    />
    </View>
  )
}