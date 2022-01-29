import { View, Text } from 'react-native';
import React from 'react';

export default function SubHeader({SubHeaderText}) {
  return (

      <Text style={{fontSize:23,color:'grey',marginVertical:5}}>{SubHeaderText}</Text>
  );
}
