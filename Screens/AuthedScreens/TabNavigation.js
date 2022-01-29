import { createBottomTabNavigator,TransitionPreset,CardStyleInterpolators } from '@react-navigation/bottom-tabs';
import { HomeStack } from './Home/HomeStack';
import { SearchStack } from './Search/SearchStack';
import { UsersStack } from './Users/UsersStack';

import LibraryScreen from './LibraryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export const  TabNavigation=()=> {
    return (
   
          <Tab.Navigator initialRouteName="Home"   screenOptions={
          ({route})=> ({
            tabBarStyle:{ backgroundColor:'#1A1A1A',borderTopWidth:0,height:60,position:'absolute',borderRadius:20,margin:15,padding:7},
                
               tabBarActiveTintColor:"white",
                headerShown:false,
                tabBarLabelStyle:{paddingBottom:3},
   
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn =route.name;
                if(rn === "Home"){
                  iconName =focused ? 'home' :'home-outline'
                }else if(rn === "Search"){
                  iconName =focused ? 'search' :'search-outline'
                }else if(rn === "Users"){
                  iconName = focused ? 'person' :'person-outline'
                }else if(rn === "Library"){
                  iconName = focused ? 'albums' :'albums-outline'
                }
              return <Ionicons name={ iconName}size={size} color={color}/>
            }
            })
          }>
  
              <Tab.Screen name='Home' component={HomeStack}/>
              <Tab.Screen name='Search'component={SearchStack}/>
              <Tab.Screen name='Library'component={LibraryScreen}/>
              <Tab.Screen name='Users'component={UsersStack}/>
     
          </Tab.Navigator>
     
    );
  }
  