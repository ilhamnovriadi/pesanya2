import React from 'react'
import { View, Text } from 'react-native'

const mFeature = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.HeaderText}</Text>
        </View>

    )
    
}

const style = {
    viewStyle:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle:{
        fontSize: 25
    }

}

export default mFeature