import { View, Text } from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
export default function BackgroundTextList({List,BackgroundColor,ForegroundColor}) {
  return (
    <View  style={{flexDirection:'row'}}>
        {List.map((element)=>(
        <Ripple key={element['id']} rippleContainerBorderRadius={20} style={{alignSelf:'flex-start',marginRight:10}}>
            <Text style={{backgroundColor:BackgroundColor,color:ForegroundColor,paddingVertical:5,paddingHorizontal:10,borderRadius:20}}>{element['name']}</Text>
        </Ripple>

        ))}
    </View>
  );
}
