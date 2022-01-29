import { View, Text } from 'react-native';
import React from 'react';

export default function GenreList({GenreList,ForegroundColor}) {
  return (
    <View style={{flexDirection:'row'}}>
      {GenreList.map((element)=>{
           return(
                   <Text key={element['key']} style={{borderWidth:1,paddingVertical:5,paddingHorizontal:10,borderColor:ForegroundColor,borderRadius:20,fontSize:14,color:ForegroundColor,marginHorizontal:5,textAlign:'center',justifyContent:'space-between'}}>{element['value']}</Text>
             )
   })
}
    </View>
  );
}
