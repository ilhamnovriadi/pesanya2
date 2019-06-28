import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class daftar extends Component {
    static navigationOptions = {
        header: null
}
    _login = () => {
        alert('Masuk')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}> Ini Daftar </Text>
                <Button title="Masuk" onPress={this._login} onPress={() => this.props.navigation.navigate("SignIn")}/>
            </View>
        )
    }
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

export default daftar