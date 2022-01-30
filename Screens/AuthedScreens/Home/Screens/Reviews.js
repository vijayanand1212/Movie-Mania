import React,{useState,useCallback} from 'react'
import { View, Text, Image,StyleSheet, FlatList ,Linking,StatusBar} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ripple from 'react-native-material-ripple'

import { MovieReview,MovieDetailsDummy } from '../../../../DummyData'

import ContentText from '../../../../Components/ContentText'
import SubHeader from '../../../../Components/SubHeader'

import { useSelector ,useDispatch} from 'react-redux';

export default function Reviews({route,navigation}) {

    const { MovieDetails } = route.params;
    const state = useSelector(state=>state);
    const styles = StyleSheet.create({

        MovieDetailsStyle:{
             paddingVertical:4,
             paddingHorizontal:9,
             alignSelf: 'flex-start',
             backgroundColor:state.UIColorsReducer.LowBGColor2,
             borderRadius:5,
             fontSize:12,
             color:state.UIColorsReducer.ForegroundColor,
             marginRight:5,
        },
        ReviewCard:{
            backgroundColor:state.UIColorsReducer.LowBGColor,
            paddingHorizontal:10,
            paddingVertical:5,
            borderRadius:10,
            marginBottom:10
        },
        MovieDetails:{
            color:state.UIColorsReducer.ForegroundColor,fontWeight:'bold',fontSize:16,marginBottom:5
        },
        ReviewTitle:{

        },
        MainContainer:{
            backgroundColor:state.UIColorsReducer.backgroundColor,
            flex:1,
            paddingHorizontal:10,
            paddingBottom:85
        }
      });

    const RenderReview =({item})=>{
        return(
        <View style={styles.ReviewCard} >
            {!item['warningSpoilers'] ? null:<Text style={{color:"yellow",fontSize:10,marginBottom:7}}>⚠️Spoiler Alert</Text>}
            <Text style={styles.MovieDetails}>{item['username']}</Text>
            <Text style={styles.MovieDetails}>{item['title']}</Text>
            {item['content'] == "" ? null :(
                <ContentText Plot={item['content']} ForegroundColor={state.UIColorsReducer.ForegroundColor} numberOfLines={5}/>
            )}
            <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={styles.MovieDetailsStyle}>⭐{item['rate']}</Text>
                <Text style={styles.MovieDetailsStyle}>{item['date']}</Text>
                <Ripple onPress={()=>{Linking.openURL(item['reviewLink'])}}>
                    <Text style={styles.MovieDetailsStyle}>See Full Details</Text>
                </Ripple>
            </View>
            <Text  style={{color:"grey",marginBottom:5,fontSize:10}}>{item['helpful']}</Text>
        </View>
        )
    }
    return (
        <View style={styles.MainContainer}>
   
            <FlatList
                ListHeaderComponent={()=>(         
                <View style={{flexDirection:'row',marginBottom:30}}>
                    <Image source={{uri:MovieDetails['image']}}  style={{width:100,height:140,resizeMode:'cover',borderRadius:10}}/>
                    <View style={{flex:1,marginLeft:10}}>
                        <View style={{flexDirection:'row'}}>
                                {/* Year */}
                                <View style={{marginRight:15}}>
                                    <SubHeader SubHeaderText="Year"/>
                                    <Text style={{color:state.UIColorsReducer.ForegroundColor,fontSize:16}}>{MovieDetails['year']}</Text>
                                </View>
                                {/* Duration */}
                                <View >
                                    <SubHeader SubHeaderText="Duration"/>
                                    <Text style={{color:state.UIColorsReducer.ForegroundColor,fontSize:16}}>{MovieDetails['runtimeStr']}</Text>
                                </View>
                            </View>
                                {/* ImdbRate */}
                            <View rippleColor='grey' onPress={()=>navigation.push("Reviews",{MovieDetails:MovieDetails})}>
                                    <SubHeader SubHeaderText="IMDB Rating"/>
                                    <Text style={{color:state.UIColorsReducer.ForegroundColor,fontSize:16}}>{MovieDetails['imDbRating']}/10</Text>
                            </View>
                        </View>
            </View>)}
                keyExtractor={(item,index)=>index}
                data={MovieReview['items']}
                renderItem={RenderReview}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar/>
        </View>
    )
}

