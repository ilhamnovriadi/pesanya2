import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

class masuk extends Component {
    static navigationOptions = {
        header: null
    }

    _masuk = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Beranda');
      };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.textStyle}> Login kuy!</Text>
                    <TextInput placeholder="User Name" style={{height: 40, width:325, fontSize: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}></TextInput>
                    <TextInput placeholder="Password" style={{height: 40, width:325, fontSize: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}></TextInput>
                    <Button title="Masuk" onPress={this._masuk} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.textStyleMin}> Coba Daftar </Text>
                    <Button title="Daftar" onPress={() => this.props.navigation.navigate("Register")} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textStyle: {
        paddingVertical: 25,
        color: 'black',
        fontSize: 20
    },
    textStyleMin: {
        paddingVertical: 8,
        color: 'black',
        fontSize: 11 
    },
    box:{
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default masuk