import * as React from 'react';
import { View, Text } from "react-native";
import CardComponent from '../components/CardComponent';
import { data } from '../data/BlogsData';

export default function BlogScreen() {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<CardComponent bolgsData={data}></CardComponent>
   
<Text style={{fontSize:16,fontWeight:'700'}}>Blog Screen</Text>
</View>
   );
 }