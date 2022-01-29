import { View, Text,FlatList,Image } from 'react-native';
import React from 'react';

import Ripple from 'react-native-material-ripple';
import { useSelector ,useDispatch} from 'react-redux';

export default function MovieListHorizontal({MovieList,Navigation}) {
  const state = useSelector(state=>state);
  return (
    <FlatList  
        showsHorizontalScrollIndicator={false}
        data={MovieList}
        renderItem={({item})=>(
          <Ripple style={{marginRight:10,alignItems:'center'}} onPress={()=>Navigation.push("MovieDetails")}>
          <Image source={{uri:item['image']}} style={{width:100,height:130,resizeMode:'cover',borderRadius:5,backgroundColor:"#1a1a1a"}}/>
          <Text style={{color:state.UIColorsReducer.ForegroundColor,marginTop:5,textAlign:'center',maxWidth:100}} numberOfLines={2}>{item['title']}</Text>
      </Ripple>
        )}
        horizontal
    />
  );
}
