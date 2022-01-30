import { View, Text ,StyleSheet, Image, TextInput,ScrollView,ImageBackground, requireNativeComponent} from 'react-native';
import React,{useState,useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
// Data
import { ImagesSource, MovieDetailsDummy } from '../../../../DummyData';

// Components
import ImageListHorizontal from '../../../../Components/ImageListHorizontal'
import { LinearGradient } from 'expo-linear-gradient';
import SubHeader from '../../../../Components/SubHeader';
import ContentText from '../../../../Components/ContentText';
import GenreList from '../../../../Components/GenreList';
import BackgroundTextList from '../../../../Components/BackgroundTextList';
import CastListHorizontal from '../../../../Components/CastListHorizontal'
import MovieListHorizontal from '../../../../Components/MovieListHorizontal'
import Ripple from 'react-native-material-ripple';

export default function MovieDetails({navigation}) {

  const state = useSelector(state=>state);
  
  const styles =StyleSheet.create({
    MainContainer:{
      backgroundColor:state.UIColorsReducer.backgroundColor,
      flex:1
    },
    MovieImage:{  
      width:"100%",
      height:250,

      overflow:'hidden'
    },
    Text:{
      color: state.UIColorsReducer.ForegroundColor,
      fontSize:50
    },
    LinearGradient:{
      width:"100%",
      height:150,
      position:'absolute',
      top:101
    },
    MovieDetailsBox:{
      flexDirection:'row',
      justifyContent:'space-evenly',

    },
    MovieTextDetails:{
      color:state.UIColorsReducer.ForegroundColor,
      fontSize:15,
      textAlign:'right'
    },
    ImdbRating:{
      color:state.UIColorsReducer.ForegroundColor,
      fontSize:22,
      textAlign:'right'
    }
  })

  return (
    <View style={styles.MainContainer}>
      <ImageBackground source={{uri:MovieDetailsDummy['image']}} style={styles.MovieImage}   imageStyle={{resizeMode: "cover", height: 370}}></ImageBackground>
      <View style={{paddingHorizontal:10,paddingBottom:80,flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <SubHeader SubHeaderText="Plot"/>
          <ContentText  numberOfLines={5} Plot={MovieDetailsDummy['plot']} ForegroundColor={state.UIColorsReducer.ForegroundColor}/>
          <View style={styles.MovieDetailsBox}>
            {/* Year */}
            <View>
              <SubHeader SubHeaderText='Year'/>
              <Text style={styles.MovieTextDetails}>{MovieDetailsDummy['year']}</Text>
            </View>
            {/* Duration */}
            <View>
              <SubHeader SubHeaderText='Duration'/>
              <Text style={styles.MovieTextDetails}>{MovieDetailsDummy['runtimeStr']}</Text>
            </View>
            {/* Imdb Rating */}
            <Ripple style={{backgroundColor:state.UIColorsReducer.LowBGColor,paddingHorizontal:5,borderRadius:10}}  rippleContainerBorderRadius={10}onPress={()=>navigation.push("Reviews",{MovieDetails:MovieDetailsDummy})}>
              <SubHeader SubHeaderText='Imdb Rating'/>
              <Text style={styles.ImdbRating}>{MovieDetailsDummy['imDbRating']}<Text style={styles.MovieTextDetails}>/10 ({MovieDetailsDummy['imDbRatingVotes']})</Text></Text>
            </Ripple>
          </View>
          {/* Genre */}
          <View>
            <SubHeader SubHeaderText="Genre"/>
            <GenreList GenreList={MovieDetailsDummy['genreList']} ForegroundColor={state.UIColorsReducer.ForegroundColor}/>
          </View>
          {/* Directors */}
          <View>
            <SubHeader SubHeaderText="Directors"/>
            <BackgroundTextList List={MovieDetailsDummy['directorList']} ForegroundColor={state.UIColorsReducer.ForegroundColor} BackgroundColor={state.UIColorsReducer.LowBGColor} Navigation={navigation} NavigateTo="CastDetails"/>
          </View>
          {/* Stars List */}
          <View>
            <SubHeader SubHeaderText="Stars"/>
            <BackgroundTextList List={MovieDetailsDummy['starList']} ForegroundColor={state.UIColorsReducer.ForegroundColor} BackgroundColor={state.UIColorsReducer.LowBGColor} Navigation={navigation} NavigateTo="CastDetails"/>
          </View>
          {/* Company */}
          <View>
            <SubHeader SubHeaderText="Companies"/>
            <BackgroundTextList List={MovieDetailsDummy['companyList']} ForegroundColor={state.UIColorsReducer.ForegroundColor} BackgroundColor={state.UIColorsReducer.LowBGColor} Navigation={navigation} NavigateTo="CastDetails"/>
          </View>
          {/* Cast */}
          <View>
            <Ripple style={{alignSelf:'flex-start'}} rippleContainerBorderRadius={20}>
              <SubHeader SubHeaderText="Cast >"/>
            </Ripple>
            <CastListHorizontal CastList={MovieDetailsDummy['actorList']} Navigation={navigation}/>
          </View>
          {/* Similars */}
          <View>
            <SubHeader SubHeaderText="Similars"/>
            <MovieListHorizontal MovieList={MovieDetailsDummy['similars']} ForegroundColor={state.UIColorsReducer.ForegroundColor} BackgroundColor={state.UIColorsReducer.LowBGColor}  Navigation={navigation}/>
          </View>
          <View >
                        <Ripple onPress={()=>navigation.push('ImageGallery')} >
                            <SubHeader SubHeaderText="Image Gallery >" />
                        </Ripple>
                        <ImageListHorizontal List={ImagesSource['items']} Navigation={navigation}/>
                    </View>
      </ScrollView>
      </View>

      <LinearGradient
          colors={[ 'transparent',state.UIColorsReducer.backgroundColor]}
          style={styles.LinearGradient}
      />
    </View>
  );
}
