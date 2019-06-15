import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import aButton from '../components/aButton'

const mSearch = ({album}) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album
    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                        />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri : image }}
                    />
            </CardSection>
            <CardSection>
                <aButton onPress={() => Linking.openURL(url)}>
                    Beli
                </aButton>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle:{
        justifiyContent : 'space-around'
    },
    headerTextStyle:{
        fontSize: 18
    },
    thumbnailContainerStyle:{
        justifiyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle:{
        height: 50,
        width: 50
    },
    imageStyle:{
        height: 300,
        flex: 1
    }

}

export default mSearch