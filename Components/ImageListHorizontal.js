import React from 'react'
import { View, Text ,FlatList,Image,TouchableOpacity} from 'react-native'
import Ripple from 'react-native-material-ripple'

export default function ImageListHorizontal(props) {
    return (
        <FlatList
                keyExtractor={(item,index)=>index}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props.List}
                renderItem={({item})=>(
              
                        <Image source={{uri:item['image']}} style={{width:150,height:150,resizeMode:'cover',backgroundColor:"#1a1a1a",marginRight:10}}/>

     
                )}

        // ListFooterComponent={()=>(<View style={{width:100,height:130,backgroundColor:"#1a1a1a",borderRadius:5,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white"}}>ShowAll</Text></View>)}
/>
    )
}
