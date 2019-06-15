import React, { Component } from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hay Nama Saya {this.props.name}!</Text>
      </View>
    );
  }
}


export default class LotsOfGreetings extends Component {
   
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }

  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
    return (
      <ScrollView>
        <View>
        <Greeting name='Rizrullah' />
        <Greeting name='Willy Hutagalung' />
        <Greeting name='Ilham Kereeen' />
        <Greeting name='Rizrullah' />
        <Greeting name='Willy Hutagalung' />
        <Greeting name='Ilham Kereeen' />
        <Greeting name='Rizrullah' />
        <Greeting name='Willy Hutagalung' />
        <Greeting name='Ilham Kereeen' />
        <Greeting name='Rizrullah' />
        <Greeting name='Willy Hutagalung' />
        <Greeting name='Ilham Kereeen' />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.year}, {item.title}</Text>}
              keyExtractor={({id}, index) => id}
            />
        </View>
      </ScrollView>
    );
  }
}
