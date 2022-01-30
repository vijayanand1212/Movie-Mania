import { View, Text ,Image, StyleSheet,ScrollView,ImageBackground} from 'react-native';
import React, { useState } from 'react';

import Ripple from 'react-native-material-ripple';
import { MovieDetailsDummy,CastDetail } from '../../../../DummyData';

import { useSelector ,useDispatch} from 'react-redux';

// Comp
import SubHeader from '../../../../Components/SubHeader';
import BackgroundTextList from '../../../../Components/BackgroundTextList';
import ContentText from '../../../../Components/ContentText';
import MovieListHorizontal from '../../../../Components/MovieListHorizontal';
import { LinearGradient } from 'expo-linear-gradient';

export default function CastDetails({navigation}) {
    const state = useSelector(state=>state);
  const [Scrolled, setScrolled] = useState(false);
    const styles =StyleSheet.create({
        MainContainer:{
            backgroundColor:state.UIColorsReducer.backgroundColor,
            flex:1
        },
        LinearGradient:{
            width:"100%",
            height:100,
            position:'absolute',
            top:235
          },
        CastImage:{
            width:200,height:200 ,backgroundColor:"#1a1a1a",resizeMode:'cover',overflow:'hidden',borderRadius:200
        },
        CastName:{
            color:state.UIColorsReducer.ForegroundColor,
            marginTop:5,
            textAlign:'center',
            maxWidth:200,
            fontSize:25
        },
        DetailsSubContainer:{
            marginHorizontal:10,
            marginTop:10
        },
        DetailsText:{
            color:state.UIColorsReducer.ForegroundColor,
            fontSize:16
        }
    })
  return (
      <View style={styles.MainContainer}>
        <View style={{marginRight:10,alignItems:'center'}}>
            <ImageBackground source={{uri:CastDetail['image']}} style={styles.CastImage}   imageStyle={{resizeMode: "cover", height: 300}}></ImageBackground>
            <Text style={styles.CastName} numberOfLines={2}>{CastDetail['name']}</Text>
        </View>
        {/*Details */}
        <ScrollView style={{marginBottom:85}} onScrollBeginDrag={()=>setScrolled(true)} onScrollEndDrag={()=>setScrolled(false)} >
                <View style={{marginHorizontal:10,marginTop:10}}>
                    <SubHeader SubHeaderText="Overview"/>
                    <ContentText Plot={CastDetail['summary']} ForegroundColor={state.UIColorsReducer.ForegroundColor}/>
                </View>
                
                <View style={{flexDirection:'row'}}>
                    {/* Birth Date */}
                    {CastDetail['birthDate'] != null ?(
                    <View style={styles.DetailsSubContainer}>
                        <SubHeader SubHeaderText="Birth Date"/>
                        <Text style={styles.DetailsText}>{CastDetail['birthDate']}</Text>
                    </View>):null
                    }
                    {/* Death Date */}
                     {CastDetail['deathDate'] != null ?(
                    <View style={styles.DetailsSubContainer}>
                        <SubHeader SubHeaderText="Death Date"/>
                        <Text style={styles.DetailsText}>{CastDetail['deathDate']}</Text>
                    </View>):null}

                </View>
                <View style={styles.DetailsSubContainer}>
                    <SubHeader SubHeaderText="Awards"/>
                    <Text style={styles.DetailsText}>{CastDetail['awards']}</Text>
                </View>
                { CastDetail['height'] != ""? (
                <View style={styles.DetailsSubContainer}>
                    <SubHeader SubHeaderText="Height"/>
                    <Text style={styles.DetailsText}>{CastDetail['height']}</Text>
                </View>
                ):null}
                <View>
                <View style={styles.DetailsSubContainer}>
                    <SubHeader SubHeaderText="Known For" Styles={{alignSelf:'flex-start',color:'grey',paddingVertical:3}}/>
                    <MovieListHorizontal MovieList={CastDetail['knownFor']} Navigation={navigation}/>
                </View>
                </View>
            </ScrollView>
            {Scrolled?(
              <LinearGradient
            colors={[state.UIColorsReducer.backgroundColor, 'transparent']}
            style={styles.LinearGradient}
        />

             ) : null}
      </View>
  );
}
