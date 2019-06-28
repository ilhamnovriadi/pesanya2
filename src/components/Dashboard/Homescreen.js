import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = props => {
    
    _logout = () => {
      AsyncStorage.clear()
      props.navigation.navigate('Auth')
    }


    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Home" onPress={() => props.navigation.navigate('Profile')} />
        <Button title="Logout" onPress={this._logout} />
      </View>
    )
  }

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

export default HomeScreen