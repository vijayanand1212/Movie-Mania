import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './Screens/SearchScreen'
const SearchStackNav =createStackNavigator();

export const SearchStack = ()=>{
    return(
        <SearchStackNav.Navigator initialRouteName='SearchScreen' screenOptions={{headerShown:false}}>
          <SearchStackNav.Screen name='SearchScreen' component={SearchScreen}/>
        </SearchStackNav.Navigator>
      
    )
  }