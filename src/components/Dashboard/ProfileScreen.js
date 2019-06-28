import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const ProfileScreen = props => (
    <View style={styles.container}>
      <Text>Other Screen</Text>
    </View>
  )

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textStyle:{
        paddingVertical: 25,
        color: 'black',
        fontSize: 25
    }
})

export default ProfileScreen