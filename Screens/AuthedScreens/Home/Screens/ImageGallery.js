import React, { useState,useRef } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TextInput,Animated,TouchableOpacity, Easing } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { elastic } from 'react-native/Libraries/Animated/Easing'
import { ImagesSource } from '../../../../DummyData'

export default function ImageGallery({navigation}) {
    const [FullScreen, setFullScreen] = useState(-1)
    const {width: Screen_width,height} =Dimensions.get('screen')
    const YPos = useRef(new Animated.Value(-50)).current  // Initial value for opacity: 0

        const OnOpen =(index)=>{
            setFullScreen(index)
            Animated.timing(
                YPos,
            {
                useNativeDriver:true,
                toValue: 30,
                duration: 500,
                easing:Easing.bounce
            }
            ).start();
        }
        const OnClose =()=>{

            Animated.timing(
                YPos,
            {
                useNativeDriver:true,
                toValue: -50,
                duration: 100,
                easing:Easing.bounce
            }
            ).start(()=>setFullScreen(-1));
        }

        return (

        <View style={{backgroundColor:'black',flex:1}}>
             {
                FullScreen == -1? (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text style={{fontSize:20,color:"white",marginHorizontal:10,marginVertical:10}}>{'<'}  Images of {ImagesSource['title']}</Text>
                    </TouchableOpacity>) : null
            }
            {
                FullScreen == -1? (
                    <FlatList
                      
                        keyExtractor={(item)=>item['image']}
                        data={ImagesSource['items']}
                        renderItem={({item,index})=>(
                            <Ripple  onPress={()=>
                                {

                                    OnOpen(index)
                                }
                            
                            }>
                                <Image source={{uri:item['image']}} style={styles.NotFull}/>
                            </Ripple>
                        )}
            
            
                        numColumns={2}
                        />
                    


                        ): <Image source={{uri:ImagesSource['items'][FullScreen ]['image']}} style={[FullScreen <0 ?styles.NotFull:styles.Full]}/>
            }
            {FullScreen == -1 ?null :(
                <Ripple onPress={()=>OnClose()} style={{position:'absolute',alignSelf:'center',transform:[{ translateY: YPos }]}}>
                <Animated.Text style={{backgroundColor:'#242424',paddingHorizontal:15,paddingVertical:5,borderRadius:20,color:'white'}}>CLOSE</Animated.Text>
            </Ripple>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    NotFull:{
        resizeMode:'cover',
        
        width:200,
        height:200,
        margin:3,
        borderRadius:5
    },
    Full:{

        resizeMode:'contain',
        flex:1,
        width:"100%"
    }
})