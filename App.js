import React from 'react'
import { View } from 'react-native';
import mFeature from './src/components/mFeature'
import mNews from './src/components/mNews'

const App = () => {
  return (
    <View>
      <mFeature headertext={'albums'}/>
      <mNews/>
    </View>

  ) 

}
