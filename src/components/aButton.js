import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const aButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    )
    
}

const styles = {
    buttonStyle:{
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 5,
        marginRight: 5,

    },
    textStyle:{
        width: '70%',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default aButton