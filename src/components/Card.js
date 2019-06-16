import React from 'react'
import { TouchableOpacity, Text, Image} from 'react-native'

export default class Card extends React.Component {
    render () {
        return (
            <TouchableOpacity style={styles.cards}>
                <Image style={styles.imageStyle} source={{uri:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg'}}></Image>
                <Text style={styles.textStyle}>{this.props.item.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 12,
        padding: 10
    },
    cards: {
        backgroundColor: 'white',
        marginBottom: 10,
        marginLeft: '2%',
        width: '90%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {height: 3, width: 3}
    },
    imageStyle: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    }
}