import { View, Text,FlatList,ImageBackground } from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import { useSelector ,useDispatch} from 'react-redux';


export default function CastListHorizontal({CastList,Navigation}) {
    const state = useSelector(state=>state);
  return (
    <FlatList  
        showsHorizontalScrollIndicator={false}
        data={CastList}
        renderItem={({item})=>(
            <Ripple style={{marginRight:10,alignItems:'center'}} onPress={()=>Navigation.push("CastDetails")}>
                       <ImageBackground source={{uri:item['image']}} style={{ width:100,height:100,borderRadius:100 ,backgroundColor:"#1a1a1a",resizeMode:'cover',overflow:'hidden',borderWidth:1,borderColor:state.UIColorsReducer.ForegroundColor}}   imageStyle={{resizeMode: "cover", height: 145}}></ImageBackground>
            <Text style={{color:state.UIColorsReducer.ForegroundColor,marginTop:5,textAlign:'center',maxWidth:100}} numberOfLines={2}>{item['name']}</Text>
        </Ripple>
        )}
        horizontal
    />
  );
}
