import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../utils/fonts';

export default class Splash1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello Saya Ilham</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: Fonts.PoligonXB
  }
});
