import React from 'react'
import { Text, View } from 'react-native'
import {data} from '../data/BlogsData'

function CardComponent({bolgsData}) {
    console.log(bolgsData)
  return (
    <View>
       
        <Text> CardComponent</Text>
    </View>
  )
}

export default CardComponent