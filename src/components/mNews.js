import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import axios from 'axios'
import mSearch from '../components/mSearch'

class mNews extends Component {
    state = {
        album: []
    }

    componentWillMount() {
        axios.get ('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })) 
    }

    renderAlbums() {
        return this.state.albums.map( album => 
            <mSearch key={album.title} album={album}/>
            )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default mNews