import { createStackNavigator } from '@react-navigation/stack';
import CastDetails from './Screens/CastDetails';
import Home from './Screens/Home';
import ImageGallery from './Screens/ImageGallery';
import MovieDetails from './Screens/MovieDetails';
import Reviews from './Screens/Reviews';

const HomeStackNav =createStackNavigator();

export const HomeStack = ()=>{
    return(
        <HomeStackNav.Navigator initialRouteName='MovieDetails' screenOptions={{headerShown:false}}>
          <HomeStackNav.Screen name='HomeScreen' component={Home}/>
          <HomeStackNav.Screen name='MovieDetails' component={MovieDetails}/>
          <HomeStackNav.Screen name='CastDetails' component={CastDetails}/>
          <HomeStackNav.Screen name='Reviews' component={Reviews}/>
          <HomeStackNav.Screen name='ImageGallery' component={ImageGallery}/>
        </HomeStackNav.Navigator>
    )
}
